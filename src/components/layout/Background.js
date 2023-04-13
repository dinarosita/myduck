import React from "react";

export default function Background() {
  return (
    <div
      className={`absolute z-[-10] h-screen w-screen top-0 left-0 flex flex-col justify-between overflow-hidden bg-opacity-50`}
    >
      <div
        className={`h-20 w-screen bg-gradient-to-b from-blue-200`}
      ></div>
      <div
        className={`h-20 w-screen bg-gradient-to-t from-sol-50 `}
      ></div>
    </div>
  );
}
