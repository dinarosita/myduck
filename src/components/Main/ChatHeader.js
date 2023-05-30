import React, { useContext, useEffect, useState } from "react";
import ChatContext from "../../contexts/ChatContext";
import ChatMenuWrapper from "./ChatMenuWrapper";
import { formatDate } from "../../utils/timestamp";
import { GREETINGS } from "../../constants/greetings";

export default function ChatHeader() {
  const { chatArray, mainId, isLoading, isArchiveMode, hasArchived } =
    useContext(ChatContext);
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");

  useEffect(() => {
    const greeting = GREETINGS.find((g) => {
      if (isLoading) return g.type === "pageLoading";
      if (!mainId && hasArchived) return g.type === "dormantUser";
      if (!mainId) return g.type === "newUser";
      return false;
    });

    if (greeting) {
      setTitle(greeting.title);
      setTagline(greeting.tagline);
    } else if (mainId) {
      const mainChat = chatArray.find((chat) => chat.id === mainId);
      setTitle(mainChat.title ? mainChat.title : null);
      setTagline(`Created: ${formatDate(mainChat.createdAt)}`);
    }
  }, [isLoading, mainId, chatArray, hasArchived]);

  return (
    <header
      className={`px-2 ${isLoading && "text-opacity-30"} ${
        isArchiveMode && "text-opacity-60"
      }`}
    >
      <div className={`relative flex flex-row justify-center gap-2 px-10 `}>
        <ChatMenuWrapper title={title}>
          <div className="pb-1 text-sm font-bold text-blossom-600">
            {isArchiveMode && "- READ ONLY -"}
          </div>
          <h1>{title || "Untitled Chat"}</h1>
        </ChatMenuWrapper>
      </div>
      <p className="tagline">{tagline}</p>
    </header>
  );
}
