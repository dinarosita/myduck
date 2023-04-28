import React from "react";
import ChatMeta from "./ChatMeta";
import MessageHistory from "./MessageHistory";
import AddMessage from "./AddMessage";
import { ChatRoomContextProvider } from "../../contexts/ChatRoomContext";

export default function Main() {
  return (
    <ChatRoomContextProvider>
      <main className="pass-overflow blush-frame flex flex-auto flex-col justify-between">
        <ChatMeta />
        <MessageHistory />
        <hr className="blush-separator" />
        <AddMessage />
      </main>
    </ChatRoomContextProvider>
  );
}
