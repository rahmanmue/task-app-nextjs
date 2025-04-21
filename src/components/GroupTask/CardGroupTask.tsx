import React from "react";
import Link from "next/link";
import { BadgeInfo, PenLine, Trash2, UserPen } from "lucide-react";

type CardGroupTaskProps = {
  id: string;
  name: string;
  leadName: string;
  role: string;
  handleEditGroup: (data: { id: string; name: string }) => void;
  handleDeleteGroup: (id: string) => void;
};

const CardGroupTask = ({
  id,
  name,
  leadName,
  role,
  handleEditGroup,
  handleDeleteGroup,
}: CardGroupTaskProps) => {
  return (
    <div className="bg-amber-500 w-full h-full pb-1 shadow hover:bg-blue-500">
      <div className="scale-95 -mt-1 -ml-2 shadow-md py-4 px-8 bg-white border-2 border-slate-950 items-center flex  justify-between gap-3">
        <div className="flex flex-col justify-start gap-3">
          <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
          <div className="flex gap-2 items-center">
            <span className="bg-slate-800 text-white p-2 rounded-full">
              <UserPen size={10} />
            </span>
            <span className="text-sm font-normal text-gray-900">
              {leadName}
            </span>
          </div>
        </div>
        <div className="flex gap-2.5 flex-col justify-end">
          <Link
            href={`/tasks/${id}`}
            className="text-center text-sm  bg-cyan-600 text-white cursor-pointer p-2 rounded-full"
          >
            <BadgeInfo size={16} />
          </Link>

          {role === "LEAD" ? (
            <>
              <button
                onClick={() => handleEditGroup({ id, name })}
                className="text-sm bg-amber-400 p-2 cursor-pointer rounded-full"
              >
                <PenLine size={16} />
              </button>
              <button
                onClick={() => handleDeleteGroup(id)}
                className="text-sm bg-red-600 p-2 text-white cursor-pointer rounded-full"
              >
                <Trash2 size={16} />
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default CardGroupTask;
