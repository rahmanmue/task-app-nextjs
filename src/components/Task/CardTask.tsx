import { CircleUser, Pencil } from "lucide-react";
import React from "react";

export type Task = {
  id: string;
  title: string;
  description: string;
  userTeamName?: string;
  status: "NOT_STARTED" | "ON_PROGRESS" | "DONE" | "REJECT";
};

type CardTaskProps = {
  task: Task;
  handleEdit: (task: Task) => void;
};

const CardTask = ({ task, handleEdit }: CardTaskProps) => {
  return (
    <>
      <div className="flex flex-col gap-2 mt-4 mb-3 w-full">
        <h2 className="text-md font-sans text-gray-900">{task.title}</h2>
        <p className="text-sm font-light tracking-tight text-slate-800 break-words">
          {task.description}
        </p>
      </div>

      <div className="flex gap-2.5 mt-5 justify-between">
        <div className="flex gap-2 mt-3 items-center">
          <div className="bg-slate-800 p-2 text-white rounded-full">
            <CircleUser size={15} />
          </div>
          <p className="text-sm font-sans text-gray-950">{task.userTeamName}</p>
        </div>
        <button
          onClick={() => handleEdit(task)}
          className="text-sm  bg-amber-400 px-3 cursor-pointer rounded-full"
        >
          <Pencil size={15} />
        </button>
      </div>
    </>
  );
};

export default CardTask;
