import { AuthorizationError } from "@/exceptions/AuthorizationError";
import { verifyAccess } from "@/lib/auth";
import { handleApiError } from "@/lib/handleApiError";
import insertLog from "@/lib/log";
import prisma from "@/lib/prisma";
import GroupTaskValidator from "@/validator/group-task";
import { NextRequest, NextResponse } from "next/server";

export type Params = {
  params: {
    id: string;
  };
};

export async function GET(_: Request, { params }: Params) {
  try {
    const { id } = await params;
    const { userId } = await verifyAccess();

    GroupTaskValidator.validateParams(id);

    const task = await prisma.groupTask.findFirst({
      where: {
        id: id,
      },
    });

    await insertLog({
      userId: userId as string,
      action: "READ",
      tableName: "GROUP_TASK",
      changes: JSON.stringify({
        message: `Success Get Group Tasks By Id ${id}`,
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

    if (role !== "LEAD") throw new AuthorizationError("Access Denied");

    const body = await request.json();
    GroupTaskValidator.validateParams(id);
    GroupTaskValidator.validatePutGroupTaskPayload(body);

    await prisma.groupTask.update({
      where: {
        id: id,
      },
      data: body,
    });

    await insertLog({
      userId: userId as string,
      action: "UPDATE",
      tableName: "GROUP_TASK",
      changes: JSON.stringify({
        message: `Success Update Group Tasks By Id ${id}`,
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

    GroupTaskValidator.validateParams(id);
    await prisma.groupTask.delete({
      where: {
        id: id,
      },
    });

    await insertLog({
      userId: userId as string,
      action: "DELETE",
      tableName: "GROUP_TASK",
      changes: JSON.stringify({
        message: `Success DELETE Group Tasks By Id ${id}`,
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
