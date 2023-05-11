import React, { useContext, useEffect, useState } from "react";
import ChatIndexContext from "../../contexts/ChatIndexContext";
import ChatTitle from "./ChatTitle";

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
      className={`blush-header relative h-fit min-h-16 px-2 ${
        (isPageLoading || (!isNewUser && !mainChatId)) && "text-opacity-30"
      }`}
    >
      <div className="flex flex-row justify-center gap-2 px-6 ">
        <ChatTitle title={title} />
      </div>
      <div className="flex flex-row justify-center gap-2 px-6">
        <div className="tagline">{tag}</div>
      </div>
    </header>
  );
}
