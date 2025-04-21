import { AuthorizationError } from "@/exceptions/AuthorizationError";
import { verifyAccess } from "@/lib/auth";
import { handleApiError } from "@/lib/handleApiError";
import prisma from "@/lib/prisma";
import TaskValidator from "@/validator/tasks";
import { NextRequest, NextResponse } from "next/server";
import { Params } from "../route";
import insertLog from "@/lib/log";

export async function GET({ params }: Params) {
  try {
    const { id } = await params;
    const { userId } = await verifyAccess();
    TaskValidator.validateParams(id);

    const task = await prisma.task.findFirst({
      where: {
        id: id,
      },
    });

    await insertLog({
      userId: userId as string,
      taskId: id,
      action: "READ",
      tableName: "TASK",
      changes: JSON.stringify({
        message: "Success Get Task",
      }),
    });

    return NextResponse.json(
      {
        status: "success",
        message: "Success get task",
        data: task,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return handleApiError(error);
  }
}

export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const { userId, role } = await verifyAccess();

    const body = await request.json();
    TaskValidator.validateParams(id);

    if (role === "LEAD") {
      TaskValidator.validatePutLeadTaskPayload(body);
    } else if (role === "TEAM") {
      TaskValidator.validatePutTeamTaskPayload(body);
    }

    await prisma.task.update({
      where: {
        id: id,
      },
      data: body,
    });

    await insertLog({
      userId: userId as string,
      taskId: id,
      action: "UPDATE",
      tableName: "TASK",
      changes: JSON.stringify({
        message: "Success Update Task",
      }),
    });

    return NextResponse.json(
      {
        status: "success",
        message: "Success update tasks",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE(_: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const { userId, role } = await verifyAccess();

    if (role !== "LEAD") throw new AuthorizationError("Access Denied");

    TaskValidator.validateParams(id);
    await prisma.task.delete({
      where: {
        id: id,
      },
    });

    await insertLog({
      userId: userId as string,
      taskId: id,
      action: "DELETE",
      tableName: "TASK",
      changes: JSON.stringify({
        message: "Success Delete Task",
      }),
    });

    return NextResponse.json(
      {
        status: "success",
        message: "Task deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return handleApiError(error);
  }
}
