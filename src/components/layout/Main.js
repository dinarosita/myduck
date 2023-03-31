import React from "react";
import ChatTitle from "../main/ChatTitle";
import MessageHistory from "../main/MessageHistory";
import AddMessage from "../main/AddMessage";

export default function Main() {


  return (
    <main className="flex flex-col p-2 gap-2">
      <ChatTitle />
      <MessageHistory />
      <AddMessage />
    </main>
  );
}
