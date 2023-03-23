import React, { useContext } from "react";
import Messages from "../chatWindow/Messages";
import AddMessage from "../chatWindow/AddMessage";
import ChatTitle from "../chatWindow/ChatTitle";
import classes from "./Main.module.css";
import { ChatContext } from "./Layout";

export default function Main(props) {
    const chat = useContext(ChatContext)

  if (props.isLoading) {
    return (
      <main>
        <h2>Loading Chats...</h2>
      </main>
    );
  } else if (!chat) {
    return (
      <main>
        <h2>Welcome to MyDuck!</h2>
      </main>
    );
  } 
  return (
    <main>
      <ChatTitle chat={chat}/>
      <Messages />
      <AddMessage />
    </main>
  );
}
