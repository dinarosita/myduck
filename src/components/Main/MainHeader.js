import React, { useContext, useEffect, useState } from "react";
import ChatContext from "../../contexts/ChatContext";
import ChatMenuWrapper from "../Menu/ChatMenuWrapper";
import { formatDate } from "../../utils/timestamp";

const GREETINGS = [
  {
    type: "pageLoading",
    title: "Loading Duck",
    tagline: "Quack quack quack",
  },
  {
    type: "noChat",
    title: "Welcome to MyDuck",
    tagline: "Get quacking...",
  },
  {
    type: "allArchived",
    title: "Your chats are all archived",
    tagline: "Revive some or start a new one",
  },
];


export default function MainHeader() {
  const { chatArray, mainId, isLoading, isArchiveMode, hasArchived } =
    useContext(ChatContext);
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");

  useEffect(() => {
    const greeting = GREETINGS.find((g) => {
      if (isLoading) return g.type === "pageLoading";
      if (!mainId && hasArchived) return g.type === "allArchived";
      if (!mainId) return g.type === "noChat";
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

  function renderTitle() {
    if (mainId && !isLoading) {
      return (
        <ChatMenuWrapper title={title}>
          <div className="pb-1 text-sm font-bold text-blossom-600">
            {isArchiveMode && "- READ AND REVIVE ONLY -"}
          </div>
          <h1>{title || "Untitled Chat"}</h1>
        </ChatMenuWrapper>
      );
    }
    return <h1>{title}</h1>;
  };

  return (
    <header
      className={`px-2 ${isLoading && "text-opacity-30"} ${
        isArchiveMode && "text-opacity-60"
      }`}
    >
      <div className={`relative flex flex-row justify-center gap-2 px-10`}>
        {renderTitle()}
      </div>
      <p className="tagline">{tagline}</p>
    </header>
  );
}
