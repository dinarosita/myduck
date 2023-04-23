import React from "react";
import ActiveChatTitle from "./ActiveChatTitle";
import MessageList from "./MessageList";
import AddMessage from "./AddMessage";
import { ActiveChatContextProvider } from "../../contexts/ActiveChatContext";

export default function Main() {
  return (
    <ActiveChatContextProvider>
      <main className="pass-overflow blush-frame flex flex-auto flex-col justify-between">
        <ActiveChatTitle />
        <MessageList />
        <hr className="blush-separator" />
        <AddMessage />
      </main>
    </ActiveChatContextProvider>
  );
}
