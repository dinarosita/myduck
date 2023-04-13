import React from "react";
import ChatHistory from "./ChatHistory";
import AddChat from "./AddChat";
import MainHr from "../common/MainHr"

export default function NavContent() {
  return (
    <nav className="flex h-full flex-auto flex-col items-start overflow-auto justify-start px-4">
      <AddChat />
      <MainHr addClass="w-full"/>
      <ChatHistory />
    </nav>
  );
}
