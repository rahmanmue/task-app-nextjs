import React from "react";

export type InputGroupProps = {
  name: string;
  placeholder: string;
};

const InputGroup = ({ name, placeholder }: InputGroupProps) => {
  return (
    <div className="mb-4">
      <label
        className="block text-md font-semibold leading-6 text-gray-900 my-2 capitalize"
        htmlFor={name}
      >
        {placeholder}
      </label>
      <input
        className="py-3 ps-4 pe-5 block w-full border-2 border-gray-200 rounded-lg text-md font-medium focus:border-blue-500 focus:border-1 focus:ring-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none "
        type="text"
        placeholder={placeholder}
        name={name}
        id={name}
      />
    </div>
  );
};

export default InputGroup;
