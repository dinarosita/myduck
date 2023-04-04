import React, { useContext } from "react";
import AddChat from "../navigation/AddChat";
import ChatHistory from "../navigation/ChatHistory";
import ChatListContext from "../../contexts/ChatListContext";

export default function Navigation() {
  const { mainChatId } = useContext(ChatListContext);

  if (!mainChatId)
    return (
      <nav className="w-1/4 shrink-0 grow-0 space-y-4  border-sol-ml p-2 pr-4">
        <h2>Let's quack!</h2>
        <AddChat />
      </nav>
    );

  return (
    <nav className="flex flex-col w-1/4 shrink-0 grow-0 gap-4  border-sol-ml p-2 pr-4">
      <ChatHistory />
      <AddChat />
    </nav>
  );
}
