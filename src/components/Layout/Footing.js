import React from "react";
import MainHr from "../Common/MainHr";

export default function Footing() {
  return (
    <footer className="w-effective flex-none px-mainspace">
      <MainHr screen />
      <div className="title flex-row-center justify-between  py-mainspace text-xs">
        <div>&copy; 2023 Codeyluwak </div>
        <div>Quack quack!</div>
      </div>
    </footer>
  );
}
