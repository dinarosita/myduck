import React, { useContext, useEffect, useState } from "react";
import ChatRoomContext from "../../contexts/ChatRoomContext";
import ChatIndexContext from "../../contexts/ChatIndexContext";

export default function ChatMeta() {
  const { isLoading, isNewUser } = useContext(ChatIndexContext);
  const { chatMeta } = useContext(ChatRoomContext);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp.seconds * 1000).toDateString();
    const time = new Date(timestamp.seconds * 1000).toLocaleTimeString();
    return `${date} at ${time}`;
  }

  useEffect(() => {
    if (isLoading) {
      setTitle("Loading Duck");
      setTag("Quack quack quack");
    } else {
      if (isNewUser) {
        setTitle("Welcome to MyDuck");
        setTag("Start a new chat!");
      } else {
        if (chatMeta) {
          setTitle(chatMeta.title ? chatMeta.title : "Untitled quack");
          setTag(`Created: ${formatTimestamp(chatMeta.createdAt)}`);
        }
      }
    }
  }, [isLoading, isNewUser, chatMeta]);

  return (
    <header
      className={`blush-header min-h-16 ${(isLoading || (!isNewUser && !chatMeta)) && "text-opacity-30"}`}
    >
      <h1>{title}</h1>
      <p className="tagline">{tag}</p>
    </header>
  );
}
