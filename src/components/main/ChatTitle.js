import React, { useContext, useEffect, useState } from "react";
import MainChatContext from "../../contexts/MainChatContext";

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
    <div className="flex flex-col items-center justify-center  border-sol pb-2">
      <h2>{title}</h2>
      <p className="text-sm">{tag}</p>
    </div>
  );
}
