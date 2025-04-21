import prisma from "@/lib/prisma";
import AuthenticationValidator from "@/validator/auth";
import { hashPassword } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { RequestRegister } from "@/types/register";
import { InvariantError } from "@/exceptions/InvariantError";
import { handleApiError } from "@/lib/handleApiError";
import insertLog from "@/lib/log";

export async function POST(request: NextRequest) {
  try {
    const body: RequestRegister = await request.json();

    AuthenticationValidator.validatePostRegisterPayload(body);

    const { username, fullname, password, role } = body;

    const existingUser = await prisma.user.findFirst({
      where: {
        username: username,
        fullname: fullname,
      },
    });

    if (existingUser) throw new InvariantError("Account has registered");

    const hashedPassword = await hashPassword(password);

    await prisma.user.create({
      data: {
        username,
        fullname,
        password: hashedPassword,
        role,
      },
    });

    await insertLog({
      action: "CREATE",
      tableName: "USER",
      changes: JSON.stringify({
        message: "Success Register user",
      }),
    });

    return NextResponse.json(
      { status: "success", message: "User registered" },
      { status: 201 }
    );
  } catch (error) {
    return handleApiError(error);
  }
}
