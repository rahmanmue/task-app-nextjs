"use client";

import { useParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { deleteTask, editTask, getTaskByGroup } from "@/services/tasks";
import { getErrorMsg } from "@/lib/getErrorMsg";
import Link from "next/link";
import { getDetailUser } from "@/services/users";
import CardTask from "@/components/Task/CardTask";
import CardEditTask from "@/components/Task/CardEditTask";
import { getStatusColor } from "@/lib/getStatusColor";
import Image from "next/image";
import { LayoutList, Trash2 } from "lucide-react";
import Navbar from "@/components/Nav/Navbar";

export type Task = {
  id: string;
  title: string;
  description: string;
  status: "NOT_STARTED" | "ON_PROGRESS" | "DONE" | "REJECT";
  userTeamId?: string;
  userTeamName?: string;
};

export default function Tasks() {
  const params = useParams();

  const [tasks, setTasks] = useState<Task[]>();
  const [error, setError] = useState<string | null>(null);
  const [role, setRole] = useState<string>("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editedTask, setEditedTask] = useState<Partial<Task>>({});

  const getTasks = async () => {
    try {
      const tasks = await getTaskByGroup(params.groupId as string);
      setTasks(tasks.data);
    } catch (error) {
      setError(getErrorMsg(error));
    } finally {
    }
  };

  const getUser = async () => {
    try {
      const res = await getDetailUser();
      const { role } = res.data;
      setRole(role);
    } catch (error) {
      setError(getErrorMsg(error));
    }
  };

  const handleEdit = (task: Task) => {
    setEditId(task.id);
    setEditedTask({ ...task });
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditedTask({});
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleDeleteTask = async (id: string) => {
    try {
      const confirmation = confirm("Are you sure delete this task?");
      if (!confirmation) return;

      await deleteTask(id);
      getTasks();
    } catch (error) {
      console.log(error);
      setError(getErrorMsg(error));
    }
  };

  const handleSaveEdit = async () => {
    try {
      const dataEdit =
        role === "LEAD"
          ? {
              title: editedTask.title,
              description: editedTask.description,
              status: editedTask.status,
              userTeamId: editedTask.userTeamId,
            }
          : {
              description: editedTask.description,
              status: editedTask.status,
            };

      await editTask(
        editedTask.id as string,
        dataEdit as {
          title?: string;
          description: string;
          status: "NOT_STARTED" | "ON_PROGRESS" | "DONE" | "REJECT";
          userTeamId?: string;
          groupId?: string;
        }
      );
      setEditId(null);
      setEditedTask({});
      getTasks();
    } catch (error) {
      setError(getErrorMsg(error));
    }
  };

  useEffect(() => {
    getTasks();
    getUser();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-8 mb-5 items-center h-[90vh]">
        <h1 className="text-4xl font-semibold mb-2">Tasks</h1>
        {role === "LEAD" ? (
          <Link
            href={`/tasks/${params.groupId}/add`}
            className="text-center cursor-pointer py-2 px-5 block w-fit rounded-full border-2 bg-blue-500 text-white border-gray-200 text-md font-medium"
          >
            ADD
          </Link>
        ) : (
          <p className="text-sm text-center px-10 font-light tracking-wide mb-2">
            Semua Task Kamu Yang Telah Di Assign Oleh Lead
          </p>
        )}
        <div className="w-1/5"></div>
        {error && (
          <p className="text-red-500 text-sm font-medium px-3 my-3 bg-red-100 py-4 rounded-md">
            <span className="font-bold">Error!</span> : {error}
          </p>
        )}

        {tasks?.length !== 0 ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-3 w-full px-10">
            {tasks?.map((task) => (
              <div
                className={`shadow-lg pb-1 pe-1 max-h-fit  ${getStatusColor(
                  task.status
                )}`}
                key={task.id}
              >
                <div className="border-slate-950 border-1 bg-white shadow-md py-5 px-3 max-w-sm scale-98 -ml-2 -mt-1 ">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      <span className="text-sm text-white bg-slate-800 p-2">
                        <LayoutList size={20} />
                      </span>
                      <span
                        className={`text-sm text-white p-2 ${getStatusColor(
                          task.status
                        )}`}
                      >
                        {task.status}
                      </span>
                    </div>

                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className={`p-2 text-xs rounded-full bg-red-500 text-white cursor-pointer ${
                        role === "TEAM" ? "hidden" : ""
                      }`}
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>

                  {editId === task.id ? (
                    <CardEditTask
                      role={role}
                      editedTask={editedTask}
                      handleChange={handleChange}
                      handleSaveEdit={handleSaveEdit}
                      cancelEdit={handleCancelEdit}
                    />
                  ) : (
                    <>
                      <CardTask
                        key={task.id}
                        task={task}
                        handleEdit={handleEdit}
                      />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-[60vh] gap-3">
            <Image
              alt="image-empty"
              src={"/assets/images/empty.svg"}
              width={500}
              height={300}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <p className="text-sm"> Tasks is Empty ...</p>
          </div>
        )}
      </div>
    </>
  );
}
