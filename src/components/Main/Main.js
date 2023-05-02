import React from "react";
import MessageHistory from "./MessageHistory";
import AddMessage from "./AddMessage";
import { MainChatContextProvider } from "../../contexts/MainChatContext";
import ChatHeader from "./ChatHeader";

export default function Main() {
  return (
    <MainChatContextProvider>
      <main className="pass-overflow blush-frame flex flex-auto flex-col justify-between">
        <ChatHeader />
        <MessageHistory />
        <hr className="blush-separator" />
        <AddMessage />
      </main>
    </MainChatContextProvider>
  );
}
