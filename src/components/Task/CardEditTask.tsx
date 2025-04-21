import React, { ChangeEvent, useEffect, useState } from "react";
import { getErrorMsg } from "@/lib/getErrorMsg";
import { getUsersTeam } from "@/services/users";

type Task = {
  id: string;
  title: string;
  description: string;
  status: "NOT_STARTED" | "ON_PROGRESS" | "DONE" | "REJECT";
  userTeamId?: string;
};

type CardEditTaskProps = {
  role: string;
  editedTask: Partial<Task>;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  handleSaveEdit: () => void;
  cancelEdit: () => void;
};

const CardEditTask = ({
  role,
  editedTask,
  handleChange,
  handleSaveEdit,
  cancelEdit,
}: CardEditTaskProps) => {
  const STATUS: string[] = ["NOT_STARTED", "ON_PROGRESS", "DONE", "REJECT"];
  const [users, setUsers] = useState([]);
  const [error, setError] = useState<string | null>(null);

  const getUsers = async () => {
    try {
      const users = await getUsersTeam();
      setUsers(users?.data);
    } catch (error) {
      setError(getErrorMsg(error));
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex flex-col gap-2 mt-2 text-gray-900">
      <input
        name="title"
        className="w-full border p-2 text-md disabled:bg-amber-100"
        value={editedTask.title || ""}
        onChange={handleChange}
        disabled={role === "TEAM"}
      />
      <select
        name="status"
        className="w-full border p-1 text-md"
        value={editedTask.status || ""}
        onChange={handleChange}
      >
        {STATUS.map((val, _) => (
          <option key={_} value={val}>
            {val}
          </option>
        ))}
      </select>
      <textarea
        name="description"
        className="w-full border p-2 text-sm"
        onChange={handleChange}
        value={editedTask.description || ""}
      />

      {role === "LEAD" ? (
        <>
          <select
            name="userTeamId"
            onChange={handleChange}
            id="userTeamId"
            className="w-full border p-2 text-md disabled:bg-amber-100 "
          >
            {users.map(({ id, username }) => (
              <option key={id} value={id}>
                {username}
              </option>
            ))}
          </select>
          {error && <p className="text-red-500 text-xs">{error}</p>}
        </>
      ) : (
        ""
      )}
      <div className="flex justify-end gap-2 mt-2">
        <button
          onClick={handleSaveEdit}
          className="text-sm bg-green-500 px-3 py-1 text-white cursor-pointer rounded-full"
        >
          Save
        </button>
        <button
          onClick={cancelEdit}
          className="text-sm bg-gray-500 px-3 py-1 text-white cursor-pointer rounded-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CardEditTask;
