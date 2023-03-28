import React, { useContext } from "react";
import AddChat from "../navigation/AddChat";
import ChatHistory from "../navigation/ChatHistory";
import ChatListContext from "../../context/ChatListContext";

export default function Navigation() {
  const { mainChatId } = useContext(ChatListContext);

  if (!mainChatId)
    return (
      <nav >
        <h2>Let's quack!</h2>
        <AddChat />
      </nav>
    );

  return (
    <nav className="flex flex-col gap-6 w-1/5 border-r border-orange-500 p-1">
      <ChatHistory />
      <AddChat />
    </nav>
  );
}
