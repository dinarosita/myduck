import React from "react";
import ChatTitle from "./ChatTitle";
import ChatMessages from "./ChatMessages";
import NewMessage from "./NewMessage";
import { ActiveChatContextProvider } from "../../contexts/ActiveChatContext";

export default function Main() {
  return (
    <ActiveChatContextProvider>
      <main className="pass-overflow blush-frame flex flex-auto flex-col justify-between">
        <ChatTitle />
        <ChatMessages />
        <hr className="blush-separator" />
        <NewMessage />
      </main>
    </ActiveChatContextProvider>
  );
}
