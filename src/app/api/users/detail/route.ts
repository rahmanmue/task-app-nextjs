import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAccess } from "@/lib/auth";
import { handleApiError } from "@/lib/handleApiError";
import { User } from "../route";

const mapUser = (user: User | null) => {
  return user
    ? {
        id: user.id,
        username: user.username,
        fullname: user.fullname,
        role: user.role,
      }
    : null;
};

export async function GET() {
  try {
    const { userId } = await verifyAccess();

    const user = await prisma.user.findFirst({
      where: {
        id: userId as string,
      },
    });

    return NextResponse.json(
      {
        status: "success",
        message: "Success get detail user",
        data: mapUser(user),
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return handleApiError(error);
  }
}
