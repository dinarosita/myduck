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
      <div className="flex flex-row justify-center items-center gap-2 items-end justify-end">
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <div className="tooltip-container">
            <IconButton
              task="chatTitleEdit"
              addButtonClass="align-bottom "
              addIconClass="icon-chatheader  ml-auto"
            />
            <div className="tooltip tooltip-chatheader">Edit chat title</div>
          </div>
          <div className="tooltip-container ">
            <IconButton
              task="chatArchive"
              addButtonClass="align-bottom "
              addIconClass="icon-chatheader ml-auto"
            />
            <div className="tooltip tooltip-chatheader">Archive chat</div>
          </div>
        </div>
      </div>
      <div className="tagline">{tag}</div>
    </header>
  );
}
