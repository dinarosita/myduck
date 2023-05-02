import React, { useContext, useEffect, useState } from "react";
import ChatIndexContext from "../../contexts/ChatIndexContext";
import IconButton from "../Common/IconButton";

export default function ChatHeader() {
  const { isPageLoading, isNewUser, mainChatMeta } =
    useContext(ChatIndexContext);
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
          setTitle(mainChatMeta.title ? mainChatMeta.title : "Untitled chat");
          setTag(`Created: ${formatTimestamp(mainChatMeta.createdAt)}`);
        }
      }
    }
  }, [isPageLoading, isNewUser, mainChatMeta]);

  return (
    <header
      className={`blush-header min-h-16 ${
        (isPageLoading || (!isNewUser && !mainChatMeta)) && "text-opacity-30"
      }`}
    >
      <div className="relative h-6 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
          <h1>{title}</h1>
        </div>
        <div className="absolute bottom-0 right-1 top-0 flex items-center">
          <div className="tooltip-parent">
            <div className="tooltip-container ">
              <IconButton
                task="chatTitleEdit"
                addIconClass="icon-on-white max-h-4"
              />
              <div className="tooltip">Edit chat title</div>
            </div>
            <div className="tooltip-container">
              <IconButton
                task="chatArchive"
                addIconClass="icon-on-white max-h-4"
              />
              <div className="tooltip">Archive chat</div>
            </div>
          </div>
        </div>
      </div>
      <div className="tagline">{tag}</div>
    </header>
  );
}
