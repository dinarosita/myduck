import React from "react";

export default function Footing() {
  return (
    <footer className="w-effective flex-none px-mainspace">
      {/* <hr
        className={` absolute left-0 h-0.5 w-screen border-0 border-x-0 border-b-0 bg-gradient-to-r from-blossom-400 via-sprig-400 to-almond-400`}
      /> */}
      <div className="text-sprig-50 font-bold flex-row-center justify-between  py-mainspace text-xs">
        <div>&copy; 2023 Codeyluwak </div>
        <div>Talking to my almond</div>
      </div>
    </footer>
  );
}
