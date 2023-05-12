import React, { useContext, useEffect, useState } from "react";
import ChatContext from "../../contexts/ChatContext";
import StageContext from "../../contexts/StageContext";
import ChatMenuWrapper from "./ChatMenuWrapper";
import { formatDate } from "../../utils/timestamp";
import { GREETINGS } from "../../constants/greetings";

export default function ChatHeader() {
  const { chatList, mainChatId } = useContext(ChatContext);
  const { isPageLoading, isNewUser, isDormantUser } = useContext(StageContext);
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");

  useEffect(() => {
    const greeting = GREETINGS.find((g) => {
      if (isPageLoading) return g.type === "pageLoading";
      if (isNewUser) return g.type === "newUser";
      if (isDormantUser) return g.type === "dormantUser";
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
  }, [isPageLoading, isNewUser, isDormantUser, chatList, mainChatId]);

  return (
    <header
      className={`px-2 ${
        (isPageLoading || (!isNewUser && !mainChatId)) && "text-opacity-30"
      }`}
    >
      <div className="flex flex-row justify-center gap-2 px-10 relative">
        <ChatMenuWrapper title={title}>
          <h1>{title || "Untitled Chat"}</h1>
        </ChatMenuWrapper>
      </div>
      <p className="tagline">{tagline}</p>
    </header>
  );
}
