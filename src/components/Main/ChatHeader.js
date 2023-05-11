import React, { useContext, useEffect, useState } from "react";
import ChatIndexContext from "../../contexts/ChatIndexContext";
import ChatTitleMenuWrapper from "./ChatTitleMenuWrapper";

export default function ChatHeader() {
  const { isPageLoading, isNewUser, chatList, mainChatId } =
    useContext(ChatIndexContext);

  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    if (isPageLoading) {
      setTitle("Loading Duck");
      setTag("Quack quack quack");
    } else {
      if (isNewUser) {
        setTitle("Welcome to MyDuck");
        setTag("Start a new chat!");
      } else {
        if (mainChatId) {
          const mainChat = chatList.find((chat) => chat.id === mainChatId);
          setTitle(mainChat.title ? mainChat.title : null);
          setTag(`Created: ${formatTimestamp(mainChat.createdAt)}`);
        }
      }
    }
  }, [isPageLoading, isNewUser, chatList, mainChatId]);

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp.seconds * 1000).toDateString();
    return `${date}`;
  }

  return (
    <header
      className={`relative px-2 ${
        (isPageLoading || (!isNewUser && !mainChatId)) && "text-opacity-30"
      }`}
    >
      <div className="flex flex-row justify-center gap-2 px-6 ">
        <ChatTitleMenuWrapper title={title}>
          <h1>{title || "Untitled Chat"}</h1>
        </ChatTitleMenuWrapper>
      </div>
      <p className="tagline">{tag}</p>
    </header>
  );
}
