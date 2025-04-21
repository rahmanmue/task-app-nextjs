"use client";

import Navbar from "@/components/Nav/Navbar";
import FormAddTask from "@/components/Task/FormAddTask";
import { getErrorMsg } from "@/lib/getErrorMsg";
import { addTask } from "@/services/tasks";
import { getUsersTeam } from "@/services/users";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type STATUS = "NOT_STARTED" | "ON_PROGRESS" | "DONE" | "REJECT";

export default function AddTasks() {
  const params = useParams();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      const users = await getUsersTeam();
      setUsers(users?.data);
    } catch (error) {
      setError(getErrorMsg(error));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const status = formData.get("status") as STATUS;
    const userTeamId = formData.get("users") as string;
    const groupId = params.groupId as string;

    try {
      await addTask({
        title,
        description,
        status,
        userTeamId,
        groupId,
      });
      router.push(`/tasks/${groupId}`);
    } catch (err) {
      setError(getErrorMsg(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center px-10 py-5 gap-3">
        <FormAddTask
          handleSubmit={handleSubmit}
          users={users}
          error={error}
          loading={loading}
        />
      </div>
    </>
  );
}
