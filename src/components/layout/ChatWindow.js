import React from "react";
import Messages from "../chatItem/Messages";
import AddMessage from "../chatItem/AddMessage";
import ChatTitle from "../chatItem/ChatTitle";
import classes from "./ChatWindow.module.css";

export default function ChatWindow(props) {

  if (props.isLoading) {
    return (
      <main>
        <h2>Loading Chats...</h2>
      </main>
    );
  } else if (props.loadedChats.length === 0) {
    return (
      <main>
        <h2>Welcome to MyDuck!</h2>
      </main>
    );
  } 
  const activeChat = props.loadedChats[0]
  return (
    <main>
      <ChatTitle title={activeChat.title}/>
      <Messages />
      <AddMessage />
    </main>
  );
}
