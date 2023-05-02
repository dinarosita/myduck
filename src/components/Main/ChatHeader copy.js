import React, { useContext, useEffect, useState } from "react";
import ChatIndexContext from "../../contexts/ChatIndexContext";

export default function ChatHeader() {
  const { isPageLoading, isNewUser, mainChatMeta } =
    useContext(ChatIndexContext);

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp.seconds * 1000).toDateString();
    const time = new Date(timestamp.seconds * 1000).toLocaleTimeString();
    return `${date} at ${time}`;
  }

  let title = "";
  let tag = "";

  if (isPageLoading) {
    title = "Loading Duck";
    tag = "Quack quack quack";
  } else {
    if (isNewUser) {
      title = "Welcome to MyDuck";
      tag = "Start a new chat!";
    } else {
      if (mainChatMeta) {
        title = mainChatMeta.title ? mainChatMeta.title : "Untitled quack";
        tag = `Created: ${formatTimestamp(mainChatMeta.createdAt)}`;
      }
    }
  }

  return (
    <header
      className={`blush-header min-h-16 ${
        (isPageLoading || (!isNewUser && !mainChatMeta)) && "text-opacity-30"
      }`}
    >
      <h1>{title && title}</h1>
      <p className="tagline">{tag && tag}</p>
    </header>
  );
}
