import React, { useContext } from "react";
import MessageHistory from "./MessageHistory";
import AddMessage from "./AddMessage";
import { MessageContextProvider } from "../../contexts/MessageContext";
import MainHeader from "./MainHeader";
import ChatContext from "../../contexts/ChatContext";

export default function Main() {
  const {isArchiveMode} = useContext(ChatContext)
  return (
    <MessageContextProvider>
      <main className={`pass-overflow blush-frame flex flex-auto flex-col justify-between ${isArchiveMode && "archive-mode"}`}>
        <MainHeader />
        <MessageHistory />
        <hr className="blush-separator" />
        <AddMessage />
      </main>
    </MessageContextProvider>
  );
}
