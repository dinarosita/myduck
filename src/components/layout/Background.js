import React from "react";

export default function Background() {
  return (
    <div className={`absolute left-0 top-0 z-[-10] flex h-screen w-screen flex-col justify-between overflow-hidden bg-opacity-50`} >
      <div className={`h-20 w-screen bg-gradient-to-b from-sol-500`}></div>
      <div className={`h-20 w-screen bg-gradient-to-t from-sol-50 `}></div>
    </div>
  );
}
