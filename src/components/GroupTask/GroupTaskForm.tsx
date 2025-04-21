import React, { useEffect, useState } from "react";
import GroupTaskInput from "./GroupTaskInput";
import { getErrorMsg } from "@/lib/getErrorMsg";
import {
  addGroup,
  deleteGroup,
  editGroup,
  getGroups,
} from "@/services/groupTasks";
import GroupTask from "@/app/group-tasks/page";
import Link from "next/link";

type GroupTask = {
  id: string;
  name: string;
  leadName: string;
};

// Komponen Tidak Terpakai
const GroupTaskForm = () => {
  const [groups, setGroups] = useState<GroupTask[]>([]);
  const [gTask, setGTask] = useState("");
  const [idEditTask, setEditTask] = useState("");
  const [buttonValue, setButtonValue] = useState("Add");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGTask(e.target.value);
  };

  const getAllGroups = async () => {
    try {
      const groups = await getGroups();
      setGroups(groups.data);
    } catch (error) {
      setError(getErrorMsg(error));
    }
  };

  const handleEditGroup = (data: { id: string; name: string }) => {
    setButtonValue("Edit");
    setGTask(data.name);
    setEditTask(data.id);
  };

  const handleDeleteGroup = async (id: string) => {
    try {
      const confirmation = confirm("Are you sure delete this group?");

      if (!confirmation) return;

      await deleteGroup(id);

      getAllGroups();
    } catch (error) {
      setError(getErrorMsg(error));
    }
  };

  const actionTask = async () => {
    try {
      setLoading(true);
      if (buttonValue === "Add") {
        await addGroup({ name: gTask });
      } else if (buttonValue === "Edit" && idEditTask) {
        await editGroup(idEditTask, { name: gTask });
        setButtonValue("Add");
      }
      setGTask("");
      getAllGroups();
    } catch (error) {
      setError(getErrorMsg(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllGroups();
  }, []);

  return (
    <>
      <GroupTaskInput
        taskValue={gTask}
        handleChangeTask={handleChangeTask}
        buttonAction={buttonValue}
        handleClickTask={actionTask}
        loading={loading}
      />
      {error && (
        <small className="text-red-500 text-center my-3">{error}</small>
      )}

      <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-3 w-full px-10">
        {groups?.map(({ id, name, leadName }: GroupTask) => (
          <div className="w-full shadow-md py-5 px-3" key={id}>
            <span className="text-sm bg-blue-500 text-white px-1">
              Lead : {leadName}
            </span>
            <h2 className="text-md font-medium mt-1">{name}</h2>
            <div className="flex gap-2.5 mt-3">
              <button
                onClick={() => handleEditGroup({ id, name })}
                className="text-sm bg-amber-400 px-3 cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteGroup(id)}
                className="text-sm bg-red-600 px-3 text-white cursor-pointer"
              >
                Hapus
              </button>
              <Link
                href={`/tasks/${id}`}
                className="text-sm py-1 ps-3 bg-cyan-600  text-white cursor-pointer"
              >
                Lihat Semua Tasks
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GroupTaskForm;
