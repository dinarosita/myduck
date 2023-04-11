import React from "react";
import MainHr from "../common/MainHr";

export default function Footing() {
  return (
    <footer className="w-full flex-none px-mainpad">
      <MainHr />
      <div className="title flex-row-center justify-between  py-mainpad text-xs">
        <div>&copy; 2023 Codeyluwak </div>
        <div>Quack quack!</div>
      </div>
    </footer>
  );
}
