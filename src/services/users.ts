export const getUsersTeam = async () => {
  const response = await fetch("/api/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed get users by team");
  }

  return data;
};

export const getDetailUser = async () => {
  const response = await fetch("/api/users/detail", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed get users by team");
  }

  return data;
};
