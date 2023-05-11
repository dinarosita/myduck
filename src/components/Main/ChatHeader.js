import React, { useContext, useEffect, useState } from "react";
import ChatIndexContext from "../../contexts/ChatIndexContext";
import ChatMenuWrapper from "./ChatMenuWrapper";
import { formatDate } from "../../utils/timestamp";
import { GREETINGS } from "../../constants/greetings";

export default function ChatHeader() {
  const { isPageLoading, isNewUser, chatList, mainChatId } =
    useContext(ChatIndexContext);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    const greeting = GREETINGS.find((g) => {
      if (isPageLoading) return g.type === "pageLoading";
      if (isNewUser) return g.type === "newUser";
      return false;
    });

    if (greeting) {
      setTitle(greeting.title);
      setTag(greeting.tagline);
    } else if (mainChatId) {
      const mainChat = chatList.find((chat) => chat.id === mainChatId);
      setTitle(mainChat.title ? mainChat.title : null);
      setTag(`Created: ${formatDate(mainChat.createdAt)}`);
    }
  }, [isPageLoading, isNewUser, chatList, mainChatId]);

  return (
    <header
      className={`relative px-2 ${
        (isPageLoading || (!isNewUser && !mainChatId)) && "text-opacity-30"
      }`}
    >
      <div className="flex flex-row justify-center gap-2 px-6 ">
        <ChatMenuWrapper title={title}>
          <h1>{title || "Untitled Chat"}</h1>
        </ChatMenuWrapper>
      </div>
      <p className="tagline">{tag}</p>
    </header>
  );
}
