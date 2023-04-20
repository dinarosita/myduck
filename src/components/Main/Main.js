import React from "react";
import ChatTitle from "./ChatTitle";
import MessageHistory from "./MessageHistory";
import AddMessage from "./AddMessage";
import { ActiveChatContextProvider } from "../../contexts/ActiveChatContext";

export default function Main() {
  return (
    <ActiveChatContextProvider>
      <main className="pass-overflow white-frame flex flex-auto flex-col justify-between">
        <ChatTitle />
        <MessageHistory />
        <hr className="white-separator" />
        <AddMessage />
      </main>
    </ActiveChatContextProvider>
  );
}
