import React from "react";
import Loading from "../Loading/Loading";

type GroupTaskInputProps = {
  taskValue: string;
  handleChangeTask: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonAction: string;
  handleClickTask: () => Promise<void>;
  loading: boolean;
};

const GroupTaskInput = ({
  taskValue,
  handleChangeTask,
  buttonAction,
  handleClickTask,
  loading,
}: GroupTaskInputProps) => {
  return (
    <div className="flex flex-col w-full px-8 md:w-2/5">
      <div className="mb-2 flex relative">
        <input
          type="text"
          className="py-3 ps-4 pe-5 block w-full border-2 border-r-0  border-gray-200 rounded-lg text-md font-medium focus:border-blue-500 focus:border-1 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Masukan Group Tasks"
          onChange={handleChangeTask}
          value={taskValue}
        />

        <button
          onClick={handleClickTask}
          className={`text-xl absolute -right-1.5 h-full  text-white px-4 py-2 rounded-r-2xl cursor-pointer ${
            buttonAction === "Edit" ? "bg-yellow-500" : "bg-blue-500"
          }`}
        >
          {loading ? <Loading /> : buttonAction}
        </button>
      </div>
    </div>
  );
};

export default GroupTaskInput;
