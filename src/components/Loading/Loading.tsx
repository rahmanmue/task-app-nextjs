import React from "react";

const Loading = () => {
  return (
    <span className="flex items-center justify-center gap-2">
      <svg
        className="animate-spin w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 10h2zm2 5.291A7.962 7.962 0 014 12H2c0 2.21.895 4.21 2.344 5.656l1.656-1.365z"
        ></path>
      </svg>
    </span>
  );
};

export default Loading;
