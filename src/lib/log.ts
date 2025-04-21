import prisma from "./prisma";
import { Logs } from "@/types/log";

const insertLog = async ({
  userId,
  action,
  tableName,
  changes,
  taskId,
}: Logs) => {
  await prisma.log.create({
    data: {
      userId,
      action,
      tableName,
      changes,
      taskId,
    },
  });
};

export default insertLog;
