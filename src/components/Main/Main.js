import React from "react";
import ChatTitle from "./ChatTitle";
import MessageHistory from "./MessageHistory";
import AddMessage from "./AddMessage";

export default function Main() {
  return (
    <main className="pass-overflow flex flex-auto flex-col justify-between white-frame">
      <ChatTitle />
      <MessageHistory />
      <hr className="white-separator"/>
      <AddMessage />
    </main>
  );
}