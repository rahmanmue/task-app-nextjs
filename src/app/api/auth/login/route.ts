import prisma from "@/lib/prisma";
import AuthenticationValidator from "@/validator/auth";
import { generateJwt, verifyUser } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { handleApiError } from "@/lib/handleApiError";
import { RequestLogin, ResponseLogin } from "@/types/login";
import { NotFoundError } from "@/exceptions/NotFoundError";
import { AuthenticationError } from "@/exceptions/AuthenticationError";
import { cookies } from "next/headers";
import insertLog from "@/lib/log";

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();

    const body: RequestLogin = await request.json();

    AuthenticationValidator.validatePostLoginPayload(body);

    const { username, password } = body;

    const existingUser = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!existingUser) throw new NotFoundError("User not registered");

    const match = await verifyUser(password, existingUser.password);

    if (!match) throw new AuthenticationError("Wrong Password");

    const token = await generateJwt(existingUser.id, existingUser.role);

    const data: ResponseLogin = {
      token: token,
    };

    const response = NextResponse.json(
      { status: "success", message: "login success", data: data },
      { status: 201 }
    );

    await insertLog({
      userId: existingUser.id,
      action: "READ",
      tableName: "USER",
      changes: JSON.stringify({
        message: "Success Login user",
      }),
    });

    cookieStore.set({
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
      maxAge: 3600,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return response;
  } catch (error) {
    return handleApiError(error);
  }
}
