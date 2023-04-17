import React from "react";
import ChatHistory from "../Navigation/ChatHistory";
import AddChat from "../Navigation/AddChat";
import MainHr from "../Common/MainHr";
import NavButton from "../Common/NavButton";

export default function Navigation() {
  return (
    <nav className="pass-overflow border-main relative flex flex-col gap-2  rounded-lg px-mainspace">
      <NavButton close  addClass="absolute right-2 top-2 lg:hidden" />
      <AddChat />
      <MainHr addClass="w-full" />
      <ChatHistory />
    </nav>
  );
}
