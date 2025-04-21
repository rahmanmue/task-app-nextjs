"use client";

import { useEffect, useState } from "react";
import CardGroupTask from "@/components/GroupTask/CardGroupTask";
import { getErrorMsg } from "@/lib/getErrorMsg";
import {
  addGroup,
  deleteGroup,
  editGroup,
  getGroups,
} from "@/services/groupTasks";
import GroupTaskInput from "@/components/GroupTask/GroupTaskInput";
import { getDetailUser } from "@/services/users";
import Image from "next/image";
import Navbar from "@/components/Nav/Navbar";

type GroupTask = {
  id: string;
  name: string;
  leadName: string;
};

export default function GroupTask() {
  const [groups, setGroups] = useState<GroupTask[]>();
  const [gTask, setGTask] = useState("");
  const [idEditTask, setEditTask] = useState("");
  const [buttonValue, setButtonValue] = useState("Add");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [role, setRole] = useState("");

  const handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGTask(e.target.value);
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
      setError(null);
      getAllGroups();
    } catch (error) {
      setError(getErrorMsg(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllGroups();
    getUser();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-8 mb-5 items-center h-[90vh]">
        <h1 className="text-4xl font-semibold mb-2">Group Tasks</h1>
        <p className="text-sm text-center px-10 font-light tracking-wide mb-2">
          Group Task Yang Telah Di Assign Oleh Lead
        </p>
        {role === "LEAD" ? (
          <GroupTaskInput
            taskValue={gTask}
            handleChangeTask={handleChangeTask}
            buttonAction={buttonValue}
            handleClickTask={actionTask}
            loading={loading}
          />
        ) : (
          ""
        )}

        {error && (
          <small className="text-red-500 text-center my-3">{error}</small>
        )}

        {groups?.length != 0 ? (
          <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-3 w-full px-10">
            {groups?.map(({ id, name, leadName }: GroupTask) => (
              <CardGroupTask
                key={id}
                id={id}
                name={name}
                leadName={leadName}
                role={role}
                handleDeleteGroup={handleDeleteGroup}
                handleEditGroup={handleEditGroup}
              />
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
            <p className="text-sm">Group Tasks is Empty ...</p>
          </div>
        )}
      </div>
    </>
  );
}
