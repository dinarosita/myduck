import React from "react";
import ChatTitle from "../main/ChatTitle";
import MessageHistory from "../main/MessageHistory";
import AddMessage from "../main/AddMessage";

export default function Main() {


  return (
    <main className="flex-1 p-1">
      <ChatTitle />
      <MessageHistory />
      <AddMessage />
    </main>
  );
}
