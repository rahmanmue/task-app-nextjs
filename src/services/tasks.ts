export const getTaskByGroup = async (groupId: string) => {
  const response = await fetch(`/api/tasks/group/${groupId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed get task by group");
  }

  return data;
};

export const getTaskById = async (id: string) => {
  const response = await fetch(`/api/tasks/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed get task by id");
  }

  return data;
};

export const addTask = async (body: {
  title: string;
  description: string;
  status: "NOT_STARTED" | "ON_PROGRESS" | "DONE" | "REJECT";
  userTeamId: string;
  groupId: string;
}) => {
  const response = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed add task");
  }

  return data;
};

export const editTask = async (
  id: string,
  body: {
    title?: string;
    description: string;
    status: "NOT_STARTED" | "ON_PROGRESS" | "DONE" | "REJECT";
    userTeamId?: string;
    groupId?: string;
  }
) => {
  const response = await fetch(`/api/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed edit task");
  }

  return data;
};

export const deleteTask = async (id: string) => {
  const response = await fetch(`/api/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed delete task by id");
  }

  return data;
};
