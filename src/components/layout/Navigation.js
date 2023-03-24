import React, { useContext } from "react";
import AddChat from "./navigation/AddChat";
import ChatHistory from "./navigation/ChatHistory";
import { AllChatsContext, MainChatIdContext } from "./Layout";
import classes from "./Navigation.module.css";

export default function Navigation() {
  const allChats = useContext(AllChatsContext);
  const mainChatId = useContext(MainChatIdContext);

  if (!allChats.length) {
    return (
      <nav>
        <h2>Let's quack</h2>
        <AddChat />
      </nav>
    );
  }

  return (
    <nav>
      <h2>Chat history</h2>
      <ChatHistory />
      <h3>New topic?</h3>
      <AddChat />
    </nav>
  );
}
