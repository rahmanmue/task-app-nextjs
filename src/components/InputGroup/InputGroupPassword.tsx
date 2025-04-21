import React, { useState } from "react";
import { InputGroupProps } from "./InputGroup";

const InputGroupPassword = ({ name, placeholder }: InputGroupProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mb-4">
      <label
        className="block text-md font-semibold leading-6 text-gray-900 my-2 capitalize"
        htmlFor={name}
      >
        {placeholder}
      </label>
      <div className="flex flex-col items-end gap-2">
        <input
          className="py-3 ps-4 pe-5 block w-full border-2 border-gray-200 rounded-lg text-md font-medium focus:border-blue-500 focus:border-1 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none "
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          name={name}
          id={name}
        />
        <small
          className="cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hidden" : "Show"} Password
        </small>
      </div>
    </div>
  );
};

export default InputGroupPassword;
