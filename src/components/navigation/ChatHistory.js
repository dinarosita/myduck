import React, { useContext, useState } from "react";
import { ChatIdContext } from "../layout/Layout";
import classes from "./ChatHistory.module.css";

export default function ChatHistory(props) {
  const chatId = useContext(ChatIdContext);
  const [selectedChat, setSelectedChat] = useState(
    props.chats[props.chats.length - 1]
  );

  const selectedChatStyle = {
    fontWeight: "bold",
    color: "ivory",
    backgroundColor: "orange",
  };

  function buttonStyle(id) {
    if (id === selectedChat.id) {
      return selectedChatStyle;
    }
  }

  return (
    <div className={classes.chatHistory}>
      {props.handleCallback(chatId)}
      <h2>Chat history</h2>
      <div className={classes.chatButtons}>
        {props.chats
          .map((chat) => {
            return (
              <button
                key={chat.id}
                style={buttonStyle(chat.id)}
                onClick={() => setSelectedChat(chat)}
              >
                {chat.title ? chat.title : "Untitled Quack"}
              </button>
            );
          })
          .reverse()}
      </div>
    </div>
  );
}
