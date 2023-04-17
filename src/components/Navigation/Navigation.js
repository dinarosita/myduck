import React from "react";
import ChatHistory from "../Navigation/ChatHistory";
import AddChat from "../Navigation/AddChat";
import MainHr from "../Common/MainHr";

export default function Navigation() {
  return (
    <nav className="pass-overflow border-main flex flex-col gap-2  rounded-lg px-mainspace">
      <AddChat />
      <MainHr addClass="w-full" />
      <ChatHistory />
    </nav>
  );
}
