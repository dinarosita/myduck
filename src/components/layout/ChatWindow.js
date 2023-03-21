import React from "react";
import Messages from "../chatItem/Messages";
import AddMessage from "../chatItem/AddMessage";
import ChatTitle from "../chatItem/ChatTitle";
import classes from "./ChatWindow.module.css"

export default function ChatWindow() {
  return (
    <main>
      <ChatTitle />
      <Messages />
      <AddMessage />
    </main>
  );
}
