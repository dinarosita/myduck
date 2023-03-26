import React, { useContext, useEffect, useState } from "react";
import ChatCollectionContext from "../../context/ChatCollectionContext";
import MainChatContext from "../../context/MainChatContext";
import classes from "./ChatTitle.module.css";

export default function ChatTitle() {

  const { id, chatMeta } = useContext(MainChatContext);
  const [title, setTitle] = useState(" ");
  const [tag, setTag] = useState(" ");

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp.seconds * 1000).toDateString();
    const time = new Date(timestamp.seconds * 1000).toLocaleTimeString();
    return `${date} at ${time}`;
  }

  useEffect(() => {
    if (!id) {
      setTitle("Welcome to MyDuck");
      setTag("Start a new chat...");
    } else {
      if (!chatMeta.title) {
        setTitle("Untitled Quacks");
      } else {
        setTitle(chatMeta.title);
      }
      setTag(`Created: ${formatTimestamp(chatMeta.createdAt)}`);
    }
  }, [id]);

  return (
    <div>
      <div className={classes.chatTitle}>
        <h2>{title}</h2>

        <div className={classes.chatTag}>
          <div>{tag}</div>
        </div>
      </div>
    </div>
  );
}
