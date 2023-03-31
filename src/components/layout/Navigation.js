import React, { useContext } from "react";
import AddChat from "../navigation/AddChat";
import ChatHistory from "../navigation/ChatHistory";
import ChatListContext from "../../contexts/ChatListContext";

export default function Navigation() {
  const { mainChatId } = useContext(ChatListContext);

  if (!mainChatId)
    return (
      <nav className="border-r border-gold-ml p-2 pr-4">
        <h2>Let's quack!</h2>
        <AddChat />
      </nav>
    );

  return (
    <nav className="border-r border-gold-ml p-2 pr-4">
      <ChatHistory />
      <AddChat />
    </nav>
  );
}
