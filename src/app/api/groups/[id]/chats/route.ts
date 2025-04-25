import { handleApiError } from "@/lib/handleApiError";
import prisma from "@/lib/prisma";
import GroupTaskValidator from "@/validator/group-task";
import { Params } from "../route";
import { NextResponse } from "next/server";
import { verifyAccess } from "@/lib/auth";

export async function GET(_: Request, { params }: Params) {
  try {
    const { id } = await params;

    const { userId } = await verifyAccess();

    GroupTaskValidator.validateParams(id);

    const userGroups = await prisma.groupTask.findUnique({
      where: { id: id },
      select: {
        lead: {
          select: { id: true, username: true },
        },
        tasks: {
          select: {
            user: {
              select: { id: true, username: true },
            },
          },
        },
      },
    });

    if (!userGroups?.lead) throw new Error("Group not found");

    const uniqueUsersMap = new Map<string, { id: string; username: string }>();

    // lead
    uniqueUsersMap.set(userGroups.lead.id, userGroups.lead);

    // anggota via task
    userGroups.tasks.forEach((t) => {
      if (t.user.id) uniqueUsersMap.set(t.user.id, t.user);
    });

    uniqueUsersMap.delete(userId as string);

    return NextResponse.json(
      {
        status: "success",
        message: "Success get members group chat",
        data: Array.from(uniqueUsersMap.values()),
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return handleApiError(error);
  }
}
