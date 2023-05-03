import React, { useContext, useEffect, useState } from "react";
import ChatIndexContext from "../../contexts/ChatIndexContext";
// import IconButton from "../Common/IconButton";
import ConfirmationPopup from "../Common/ConfirmationPopUp";
import ChatTitle from "./ChatTitle";

export default function ChatHeader() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { isPageLoading, isNewUser, mainChatMeta } =
    useContext(ChatIndexContext);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");


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

  return (
    <header
      className={`blush-header relative min-h-16 px-8 ${
        (isPageLoading || (!isNewUser && !mainChatMeta)) && "text-opacity-30"
      }`}
    >
      <div className="flex flex-row justify-center gap-2">
        <ChatTitle title={title} />
      </div>
      <div className="flex flex-row justify-center gap-2">
        <div className="tagline">{tag}</div>
        
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
