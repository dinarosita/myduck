import React, { useContext, useEffect, useState } from "react";
import ChatIndexContext from "../../contexts/ChatIndexContext";
import IconButton from "../Common/IconButton";
import ConfirmationPopup from "../Common/ConfirmationPopUp";

export default function ChatHeader() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { isPageLoading, isNewUser, mainChatMeta } =
    useContext(ChatIndexContext);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

  // function formatTimestamp(timestamp) {
  //   const date = new Date(timestamp.seconds * 1000).toDateString();
  //   const time = new Date(timestamp.seconds * 1000).toLocaleTimeString();
  //   return `${date} at ${time}`;
  // }
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp.seconds * 1000).toDateString();
    return `${date}`;
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

  function handleDeleteClick() {
    setShowConfirmation(true);
  }

  return (
    <header
      className={`blush-header relative min-h-16 px-8 ${
        (isPageLoading || (!isNewUser && !mainChatMeta)) && "text-opacity-30"
      }`}
    >
      <div className="flex flex-row justify-center gap-2">
        <h1 className="">{title}</h1>
        <IconButton task="editItem" addButtonClass="h-4 w-4" addIconClass="icon-chatheader ml-auto" />
      </div>
      <div className="flex flex-row justify-center gap-2 align-bottom">
        <div className="tagline">{tag}</div>
        <IconButton
          task="archiveItem" addButtonClass="h-4 w-4"
          addIconClass="icon-chatheader ml-auto leading-none"
          onClick={handleDeleteClick}
        />
      </div>
      <div>
        {showConfirmation && (
          <ConfirmationPopup
            onConfirm={() => {
              setShowConfirmation(false);
              // Handle the confirmation action here
            }}
            onCancel={() => setShowConfirmation(false)}
            type="chatArchive"
          />
        )}
      </div>
    </header>
  );
}
