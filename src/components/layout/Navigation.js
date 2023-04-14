import React, { useContext } from "react";
import FlapContext from "../../contexts/FlapContext";
import ChatHistory from "../contents/ChatHistory";
import AddChat from "../contents/AddChat";
import MainHr from "../common/MainHr";

export default function Navigation() {
  const { flapOpen } = useContext(FlapContext);


  return (
    <div
      className={`
        absolute z-20 flex h-full w-72 flex-col overflow-auto py-mainspace transition-all duration-default 
      lg:static lg:flex-none 
       
      ${flapOpen ? "left-0" : "-left-72"}`}
    >

      <div className={`border-main flex-auto overflow-auto rounded-r-3xl border-l-0 bg-gradient-to-r from-white via-white to-sol-25 p-mainspace lg:border-0 lg:from-transparent lg:via-transparent lg:to-transparent `}>
        <nav className="flex h-full flex-auto flex-col items-start justify-start overflow-auto px-2">
          <AddChat />
          <MainHr addClass="w-full" />
          <ChatHistory />
        </nav>
      </div>
    </div>
  );
}
