export const getGroups = async () => {
  const response = await fetch("/api/groups", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed get groups");
  }

  return data;
};

export const getGroupById = async (id: string) => {
  const response = await fetch(`/api/groups/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed get group by id");
  }

  return data;
};

export const addGroup = async (body: { name: string }) => {
  const response = await fetch("/api/groups", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed add groups");
  }

  return data;
};

export const editGroup = async (id: string, body: { name: string }) => {
  const response = await fetch(`/api/groups/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed edit groups");
  }

  return data;
};

export const deleteGroup = async (id: string) => {
  const response = await fetch(`/api/groups/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed delete groups");
  }

  return data;
};
