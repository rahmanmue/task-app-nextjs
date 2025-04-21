import { AuthorizationError } from "@/exceptions/AuthorizationError";
import { verifyAccess } from "@/lib/auth";
import { handleApiError } from "@/lib/handleApiError";
import insertLog from "@/lib/log";
import prisma from "@/lib/prisma";
import GroupTaskValidator from "@/validator/group-task";
import { NextRequest, NextResponse } from "next/server";

type GTask = {
  id: string;
  name: string;
  leadId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  lead: {
    username: string;
  };
};

const mapGroupTask = (gTask: GTask[]) => {
  return gTask.map(({ id, name, lead }) => ({
    id,
    name,
    leadName: lead.username,
  }));
};

export async function POST(request: NextRequest) {
  try {
    const { userId, role } = await verifyAccess();

    const body = await request.json();
    body.leadId = userId;

    GroupTaskValidator.validatePostGroupTaskPayload(body);

    if (role === "TEAM") throw new AuthorizationError("Access Denied");

    await prisma.groupTask.create({ data: body });

    await insertLog({
      userId: userId as string,
      action: "CREATE",
      tableName: "GROUP_TASK",
      changes: JSON.stringify({
        message: "Success Created Group Task",
      }),
    });

    return NextResponse.json(
      {
        status: "success",
        message: "Success created group tasks",
      },
      { status: 201 }
    );
  } catch (error) {
    return handleApiError(error);
  }
}

export async function GET() {
  try {
    const { userId, role } = await verifyAccess();

    let groupTasks;

    if (role === "LEAD") {
      groupTasks = await prisma.groupTask.findMany({
        where: { leadId: userId as string },
        include: {
          lead: {
            select: {
              username: true,
            },
          },
        },
      });
    } else if (role === "TEAM") {
      groupTasks = await prisma.groupTask.findMany({
        where: {
          tasks: {
            some: {
              userTeamId: userId as string,
            },
          },
        },
        include: {
          lead: {
            select: {
              username: true,
            },
          },
        },
      });
    }

    await insertLog({
      userId: userId as string,
      action: "READ",
      tableName: "GROUP_TASK",
      changes: JSON.stringify({
        message: "Success Get All Group Task",
      }),
    });

    return NextResponse.json(
      {
        status: "success",
        message: "Success get all group tasks",
        data: groupTasks ? mapGroupTask(groupTasks) : [],
      },
      { status: 200 }
    );
  } catch (error) {
    return handleApiError(error);
  }
}
