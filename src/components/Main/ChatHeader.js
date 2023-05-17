import React, { useContext, useEffect, useState } from "react";
import ChatContext from "../../contexts/ChatContext";
import ChatMenuWrapper from "./ChatMenuWrapper";
import { formatDate } from "../../utils/timestamp";
import { GREETINGS } from "../../constants/greetings";

export default function ChatHeader() {
  const { chatList, mainChatId, isPageLoading } = useContext(ChatContext);
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");

  useEffect(() => {
    const greeting = GREETINGS.find((g) => {
      if (isPageLoading) return g.type === "pageLoading";
      if (!mainChatId) return g.type === "newUser";
      return false;
    });

    if (greeting) {
      setTitle(greeting.title);
      setTagline(greeting.tagline);
    } else if (mainChatId) {
      const mainChat = chatList.find((chat) => chat.id === mainChatId);
      setTitle(mainChat.title ? mainChat.title : null);
      setTagline(`Created: ${formatDate(mainChat.createdAt)}`);
    }
  }, [isPageLoading, mainChatId, chatList]);

  return (
    <header
      className={`px-2 ${
        (isPageLoading || !mainChatId) && "text-opacity-30"
      }`}
    >
      <div className="relative flex flex-row justify-center gap-2 px-10">
        <ChatMenuWrapper title={title}>
          <h1>{title || "Untitled Chat"}</h1>
        </ChatMenuWrapper>
      </div>
      <p className="tagline">{tagline}</p>
    </header>
  );
}
