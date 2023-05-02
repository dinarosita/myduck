import React, { useContext, useEffect, useState } from "react";
import ChatIndexContext from "../../contexts/ChatIndexContext";
import IconButton from "../Common/IconButton";
import ConfirmationPopup from "../Common/ConfirmationPopUp";

export default function ChatHeader() {
  const [showConfirmation, setShowConfirmation] = useState(false)
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
    setShowConfirmation(true)
  }

  return (
    <header
      className={`blush-header relative min-h-16 px-8 ${
        (isPageLoading || (!isNewUser && !mainChatMeta)) && "text-opacity-30"
      }`}
    >
      <h1 className="">{title}</h1>
      <div className="tagline">{tag}</div>
      <div className="absolute right-0 bottom-3 flex-col-center h-10">
        <IconButton
          task="editItem"
          addIconClass="icon-chatheader"
        />        
        <IconButton
          task="archiveItem"
          addIconClass="icon-chatheader"
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
