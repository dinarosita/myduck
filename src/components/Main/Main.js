import React from "react";
import MessageHistory from "./MessageHistory";
import AddMessage from "./AddMessage";
import { MessageContextProvider } from "../../contexts/MessageContext";
import ChatHeader from "./ChatHeader";

export default function Main() {
  return (
    <MessageContextProvider>
      <main className="pass-overflow blush-frame flex flex-auto flex-col justify-between">
        <ChatHeader />
        <MessageHistory />
        <hr className="blush-separator" />
        <AddMessage />
      </main>
    </MessageContextProvider>
  );
}
