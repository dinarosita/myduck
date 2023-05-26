import React, { useContext, useEffect, useState } from "react";
import ChatContext from "../../contexts/ChatContext";
import ChatMenuWrapper from "./ChatMenuWrapper";
import { formatDate } from "../../utils/timestamp";
import { GREETINGS } from "../../constants/greetings";

export default function ChatHeader() {
  const { chatCollection, mainId, isPageLoading } = useContext(ChatContext);
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");

  useEffect(() => {
    const greeting = GREETINGS.find((g) => {
      if (isPageLoading) return g.type === "pageLoading";
      if (!mainId) return g.type === "newUser";
      return false;
    });

    if (greeting) {
      setTitle(greeting.title);
      setTagline(greeting.tagline);
    } else if (mainId) {
      const mainChat = chatCollection.find((chat) => chat.id === mainId);
      setTitle(mainChat.title ? mainChat.title : null);
      setTagline(`Created: ${formatDate(mainChat.createdAt)}`);
    }
  }, [isPageLoading, mainId, chatCollection]);

  return (
    <header
      className={`px-2 ${
        (isPageLoading || !mainId) && "text-opacity-30"
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
