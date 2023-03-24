import React, { useContext } from "react";
import { MainChatIdContext } from "../layout/Content";
import { AllChatsContext } from "../layout/Layout";
import classes from "./ChatTitle.module.css";

export default function ChatTitle() {
  const allChats = useContext(AllChatsContext);
  const mainChatId = useContext(MainChatIdContext);

  const mainChat = allChats.find((chat) => chat.id === mainChatId);

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp.seconds * 1000).toDateString();
    const time = new Date(timestamp.seconds * 1000).toLocaleTimeString();
    return `${date} at ${time}`;
  }

  return (
    <div className={classes.chatTitle}>
      <h2>{mainChat.title ? mainChat.title : "Untitled Quacks"}</h2>
      <div className={classes.timestamp}>
        Created: {formatTimestamp(mainChat.createdAt)}
      </div>
    </div>
  );
}
