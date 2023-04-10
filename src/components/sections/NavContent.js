import React from "react";
import ChatList from "./ChatList";
import AddChat from "./AddChat";

export default function NavContent() {
  return (
    <nav className="flex h-full flex-col flex-1 gap-8 overflow-auto items-start justify-between mx-3 mb-10 mt-20">
      <ChatList />
      <AddChat />
    </nav>
  );
}
