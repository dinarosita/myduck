import React, { useContext } from "react";
import FlapContext from "../../contexts/FlapContext";
import ChatHistory from "../contents/ChatHistory";
import AddChat from "../contents/AddChat";
import MainHr from "../common/MainHr";
import NavSkin from "../common/NavSkin";

export default function Navigation() {
  const { isFlapOpen } = useContext(FlapContext);

  return (
    // <div
    //   className={`
    //     absolute z-20 flex h-full w-72 flex-col overflow-auto py-mainspace transition-all duration-default
    //   lg:static lg:flex-none

    //   ${isFlapOpen ? "left-0" : "-left-72"}`}
    // >

    //   <div className={`border-main flex-auto overflow-auto rounded-r-3xl border-l-0 bg-gradient-to-r from-white via-white to-sol-25 p-mainspace lg:border-0 lg:from-transparent lg:via-transparent lg:to-transparent `}>
    // <nav className="flex h-full flex-auto flex-col items-start justify-start overflow-auto px-2">
    <NavSkin>
      <div
        className={`
        flex flex-1 flex-col
        overflow-y-auto px-mainspace gap-2
    `}
      >
        <AddChat />
        <MainHr addClass="w-full" />
        <ChatHistory />
      </div>
    </NavSkin>
    // </nav>
    //   </div>
    // </div>
  );
}
