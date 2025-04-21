import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAccess } from "@/lib/auth";
import { AuthorizationError } from "@/exceptions/AuthorizationError";
import { handleApiError } from "@/lib/handleApiError";

export async function GET() {
  try {
    const { role } = await verifyAccess();

    if (role === "TEAM") throw new AuthorizationError("Access Denied");

    const users = await prisma.user.findMany({
      where: {
        role: "TEAM",
      },
    });

    return NextResponse.json(
      {
        status: "success",
        message: "Success get users",
        data: users,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return handleApiError(error);
  }
}
