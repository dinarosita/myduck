import React, { useContext, useEffect, useState } from "react";
import ActiveChatContext from "../../contexts/ActiveChatContext";

export default function ChatTitle() {
  const { id, chatMeta } = useContext(ActiveChatContext);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

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
      if (!chatMeta || !chatMeta.title) {
        setTitle("Untitled Quacks");
      } else {
        setTitle(chatMeta.title);
      }
      if (chatMeta && chatMeta.createdAt) {
        setTag(`Created: ${formatTimestamp(chatMeta.createdAt)}`);
      } else {
        setTag("");
      }
    }
  }, [id, chatMeta]);

  return (
      <header className="blush-header">
        <h1>{title}</h1>
        <p className="tagline">{tag}</p>
      </header>
  );
}
