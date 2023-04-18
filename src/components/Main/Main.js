import React from "react";
import ChatTitle from "./ChatTitle";
import MessageHistory from "./MessageHistory";
import AddMessage from "./AddMessage";

export default function Main() {
  return (
    <main className="pass-overflow  flex flex-auto flex-col justify-between border-blossom-50 border-8 rounded-3xl ">
      <ChatTitle />
      <MessageHistory />
      <AddMessage />
    </main>
  );
}
