import React from "react";
import InputGroup from "../InputGroup/InputGroup";
import Button from "../Button/Button";

type FormAddTaskProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  error: string | null;
  loading: boolean;
  users: {
    id: string;
    username: string;
  }[];
};

const STATUS: string[] = ["NOT_STARTED", "ON_PROGRESS", "DONE", "REJECT"];

const FormAddTask = ({
  handleSubmit,
  error,
  loading,
  users,
}: FormAddTaskProps) => {
  return (
    <form onSubmit={handleSubmit} className="w-full md:w-full">
      <h1 className="font-bold md:text-5xl text-4xl text-left mb-3">Task</h1>
      {error && (
        <p className="text-red-500 text-sm font-medium px-3 my-3 bg-red-100 py-4 rounded-md">
          <span className="font-bold">Error!</span> : {error}
        </p>
      )}

      <InputGroup name="title" placeholder="masukan title" />

      <div className="mb-4">
        <label
          className="block text-md font-semibold leading-6 text-gray-900 my-2"
          htmlFor="description"
        >
          Masukan Description
        </label>
        <textarea
          name="description"
          placeholder="Masukan Description"
          className="py-3 ps-4 pe-5 block w-full border-2  border-gray-200 rounded-lg text-md font-medium focus:border-blue-500 focus:border-1 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-md font-semibold leading-6 text-gray-900 my-2"
          htmlFor="username"
        >
          Status
        </label>
        <select
          name="status"
          id="status"
          className="py-3 ps-4 pe-5 block w-full border-2 border-gray-200 rounded-lg text-md font-medium focus:border-blue-500 focus:border-1 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none "
        >
          {STATUS.map((val, _) => (
            <option key={_} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label
          className="block text-md font-semibold leading-6 text-gray-900 my-2"
          htmlFor="username"
        >
          Users [Team]
        </label>
        <select
          name="users"
          id="users"
          className="py-3 ps-4 pe-5 block w-full border-2  border-gray-200 rounded-lg text-md font-medium focus:border-blue-500 focus:border-1 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none "
        >
          {users.map(({ id, username }) => (
            <option key={id} value={id}>
              {username}
            </option>
          ))}
        </select>
      </div>
      <Button title="Submit" loading={loading} />
    </form>
  );
};

export default FormAddTask;
