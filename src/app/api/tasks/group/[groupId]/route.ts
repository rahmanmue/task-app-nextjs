import { verifyAccess } from "@/lib/auth";
import { handleApiError } from "@/lib/handleApiError";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Params } from "../../route";
import TaskValidator from "@/validator/tasks";
import insertLog from "@/lib/log";

type Tasks = {
  id: string;
  title: string;
  description: string;
  status: "NOT_STARTED" | "ON_PROGRESS" | "DONE" | "REJECT";
  user: {
    username: string;
  };
  group: {
    name: string;
  };
};

const mapTask = (tasks: Tasks[]) => {
  return tasks.map(({ id, title, description, status, user, group }) => ({
    id,
    title,
    description,
    status,
    userTeamName: user.username,
    groupName: group.name,
  }));
};

export async function GET(_: Request, { params }: Params) {
  try {
    const { groupId } = await params;

    const { userId, role } = await verifyAccess();

    TaskValidator.validateParamsGroupId(groupId as string);

    let tasks;

    if (role === "LEAD") {
      tasks = await prisma.task.findMany({
        where: {
          groupId: groupId,
        },
        include: {
          user: {
            select: {
              username: true,
            },
          },
          group: {
            select: {
              name: true,
            },
          },
        },
      });
      tasks = mapTask(tasks);
    } else if (role === "TEAM") {
      const getTasks = await prisma.task.findMany({
        where: {
          userTeamId: userId as string,
          groupId: groupId,
        },
        include: {
          user: {
            select: {
              username: true,
            },
          },
          group: {
            select: {
              name: true,
            },
          },
        },
      });

      // const mapTaskDB = mapTask(getTasks);
      // const taskNotStarted = mapTaskDB.filter(
      //   ({ status }) => status === "NOT_STARTED"
      // );
      // const taskOnProgress = mapTaskDB.filter(
      //   ({ status }) => status === "ON_PROGRESS"
      // );
      // const taskDone = mapTaskDB.filter(({ status }) => status === "DONE");
      // const taskReject = mapTaskDB.filter(({ status }) => status === "REJECT");

      // tasks = {
      //   taskNotStarted,
      //   taskOnProgress,
      //   taskDone,
      //   taskReject,
      // };

      tasks = mapTask(getTasks);
    }

    await insertLog({
      userId: userId as string,
      action: "READ",
      tableName: "TASK",
      changes: JSON.stringify({
        message: "Success Get All Tasks",
      }),
    });

    return NextResponse.json(
      {
        status: "success",
        message: "Success get all tasks",
        data: tasks,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return handleApiError(error);
  }
}
