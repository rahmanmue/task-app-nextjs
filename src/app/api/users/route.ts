import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verifyAccess } from "@/lib/auth";
import { AuthorizationError } from "@/exceptions/AuthorizationError";
import { handleApiError } from "@/lib/handleApiError";

export type User = {
  id: string;
  username: string;
  fullname: string;
  role: string;
};

const mapUsers = (users: User[]) => {
  return users?.length !== 0
    ? users.map(({ id, username, fullname, role }) => {
        return {
          id,
          username,
          fullname,
          role,
        };
      })
    : [];
};

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
        data: mapUsers(users),
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return handleApiError(error);
  }
}
