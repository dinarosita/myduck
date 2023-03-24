import React, { useContext } from "react";
import classes from "./ChatTitle.module.css";

export default function ChatTitle(props) {
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp.seconds * 1000).toDateString();
    const time = new Date(timestamp.seconds * 1000).toLocaleTimeString();
    return `${date} at ${time}`;
  }

  return (
    <div className={classes.chatTitle}>
      <h2>{props.chat.title ? props.chat.title : "Untitled Quacks"}</h2>
      <div className={classes.timestamp}>Created: {formatTimestamp(props.chat.createdAt)}</div>
    </div>
  );
}
