import React from "react";
import ChatList from "./ChatList";
import AddChat from "./AddChat";

export default function NavContent() {
  return (
    <nav className="flex h-full flex-col flex-auto gap-4  overflow-auto items-start justify-between ">
      <ChatList />
      <AddChat />
    </nav>
  );
}
