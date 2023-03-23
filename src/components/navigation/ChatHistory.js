import React, { useContext } from "react";
import classes from "./ChatHistory.module.css";
import { ChatContext } from "../layout/Layout";

export default function ChatHistory(props) {
  const selectedChat = useContext(ChatContext);

  return (
    <div className={classes.chatHistory}>
      <h2>Chat history</h2>
      <div className={classes.chatButtons}>
        {props.loadedChats.reverse().map((chat) => {
          return (
            <button key={chat.id}>
              {chat.title ? chat.title : "Untitled Quack"}
            </button>
          );
        })}
      </div>
    </div>
  );
}
