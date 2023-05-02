import React, { useContext, useEffect, useState } from "react";
import ChatIndexContext from "../../contexts/ChatIndexContext";

export default function ChatHeader() {
  const { isPageLoading, isNewUser, mainChatMeta } = useContext(ChatIndexContext);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp.seconds * 1000).toDateString();
    const time = new Date(timestamp.seconds * 1000).toLocaleTimeString();
    return `${date} at ${time}`;
  }

  useEffect(() => {
    if (isPageLoading) {
      setTitle("Loading Duck");
      setTag("Quack quack quack");
    } else {
      if (isNewUser) {
        setTitle("Welcome to MyDuck");
        setTag("Start a new chat!");
      } else {
        if (mainChatMeta.id) {
          setTitle(mainChatMeta.title ? mainChatMeta.title : "Untitled quack");
          setTag(`Created: ${formatTimestamp(mainChatMeta.createdAt)}`);
        }
      }
    }
  }, [isPageLoading, isNewUser, mainChatMeta]);

  return (
    <header
      className={`blush-header min-h-16 ${(isPageLoading || (!isNewUser && !mainChatMeta)) && "text-opacity-30"}`}
    >
      <h1>{title}</h1>
      <p className="tagline">{tag}</p>
    </header>
  );
}
