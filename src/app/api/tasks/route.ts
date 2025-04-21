import { AuthorizationError } from "@/exceptions/AuthorizationError";
import { verifyAccess } from "@/lib/auth";
import { handleApiError } from "@/lib/handleApiError";
import insertLog from "@/lib/log";
import prisma from "@/lib/prisma";
import TaskValidator from "@/validator/tasks";
import { NextRequest, NextResponse } from "next/server";

export type Params = {
  params: {
    id: string;
    groupId?: string;
  };
};

export async function POST(request: NextRequest) {
  try {
    const { userId, role } = await verifyAccess();

    const body = await request.json();

    TaskValidator.validatePostTaskPayload(body);

    if (role === "TEAM") throw new AuthorizationError("Access Denied");

    const task = await prisma.task.create({ data: body });

    await insertLog({
      userId: userId as string,
      taskId: task.id,
      action: "CREATE",
      tableName: "TASK",
      changes: JSON.stringify({
        message: "Success Created Tasks",
      }),
    });

    return NextResponse.json(
      {
        status: "success",
        message: "Success created tasks",
      },
      { status: 201 }
    );
  } catch (error) {
    return handleApiError(error);
  }
}
