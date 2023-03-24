import React, { useContext } from "react";
import Messages from "../chatWindow/Messages";
import AddMessage from "../chatWindow/AddMessage";
import ChatTitle from "../chatWindow/ChatTitle";
import classes from "./Main.module.css";
import { ChatIdContext } from "./Layout";

export default function Main(props) {
  const chatId = useContext(ChatIdContext);
  const chat = props.chats.find((chat) => chat.id === chatId);
  if (props.isLoading) {
    return (
      <main>
        <h2>Loading Chats...</h2>
      </main>
    );
  } else if (!chatId) {
    return (
      <main>
        <h2>Welcome to MyDuck!</h2>
      </main>
    );
  }
  return (
    <main>
      <ChatTitle chat={chat} />
      <Messages chat={chat} />
      <AddMessage chat={chat} />
    </main>
  );
}
