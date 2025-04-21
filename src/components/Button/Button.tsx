import React from "react";
import Loading from "../Loading/Loading";

const Button = ({ title, loading }: { title: string; loading: boolean }) => {
  return (
    <button
      className="font-bold cursor-pointer w-full h-10 uppercase rounded focus:outline-none focus:shadow-outline mt-5 bg-green-500 hover:bg-green-700 text-white"
      type="submit"
    >
      {loading ? <Loading /> : title}
    </button>
  );
};

export default Button;
