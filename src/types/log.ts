/* eslint-disable @typescript-eslint/no-explicit-any */
export type Logs = {
  userId?: string;
  action: "CREATE" | "READ" | "UPDATE" | "DELETE";
  tableName: "USER" | "TASK" | "GROUP_TASK";
  changes: any;
  taskId?: string;
};
