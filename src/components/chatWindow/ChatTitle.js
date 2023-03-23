import React, { useContext } from "react";
import classes from "./ChatTitle.module.css";
import { ChatContext } from "../layout/Layout";

export default function ChatTitle() {
    const chat = useContext(ChatContext)
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp.seconds * 1000).toDateString();
    const time = new Date(timestamp.seconds * 1000).toLocaleTimeString();
    return `${date} at ${time}`;
  }
  return (
    <div className={classes.chatTitle}>
      <h2>{chat.title ? chat.title : "Untitled Quacks"}</h2>
      <div className={classes.timestamp}>Created: {formatTimestamp(chat.createdAt)}</div>
    </div>
  );
}
