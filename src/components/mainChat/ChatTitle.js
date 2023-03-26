import React, { useContext } from "react";
import MainChatContext from "../../context/MainChatContext";
import classes from "./ChatTitle.module.css";

export default function ChatTitle() {
  const { chatMeta } = useContext(MainChatContext);

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp.seconds * 1000).toDateString();
    const time = new Date(timestamp.seconds * 1000).toLocaleTimeString();
    return `${date} at ${time}`;
  }

  return (
    <div>
      <div className={classes.chatTitle}>
        <h2>{chatMeta.title ? chatMeta.title : "Untitled Quacks"}</h2>

        <div className={classes.timestamp}>
          <div>Created: {formatTimestamp(chatMeta.createdAt)}</div>
        </div>
      </div>
    </div>
  );
}
