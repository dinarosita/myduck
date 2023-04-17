import React, { useContext } from "react";
import FlapContext from "../../contexts/FlapContext";
import ChatHistory from "../Navigation/ChatHistory";
import AddChat from "../Navigation/AddChat";
import MainHr from "../Common/MainHr";
import NavSkin from "../Common/NavSkin";
import IonicButton from "../Common/IonicButton";

export default function Navigation() {
  const { isFlapOpen, handleCloseFlap } = useContext(FlapContext);

  return (
    // <div
    //   className={`
    //     absolute z-20 flex h-full w-72 flex-col overflow-auto py-mainspace transition-all duration-default
    //   lg:static lg:flex-none

    //   ${isFlapOpen ? "left-0" : "-left-72"}`}
    // >

    //   <div className={`border-main flex-auto overflow-auto rounded-r-3xl border-l-0 bg-gradient-to-r from-white via-white to-sol-25 p-mainspace lg:border-0 lg:from-transparent lg:via-transparent lg:to-transparent `}>
    // <nav className="flex h-full flex-auto flex-col items-start justify-start overflow-auto px-2">
    <nav className=" pass-overlay flex flex-col border-main rounded-lg w-80">
      <IonicButton
        ionic="close"
        onClick={handleCloseFlap}
        addClass="lg:hidden"
      ></IonicButton>
      <div
        className={`
        flex  flex-1
        flex-col gap-2 pass-overlay px-mainspace
    `}
      >
        <AddChat />
        <MainHr addClass="w-full" />
        <ChatHistory />
      </div>
    </nav>
    // </nav>
    //   </div>
    // </div>
  );
}
