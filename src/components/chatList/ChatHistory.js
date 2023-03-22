import React from "react";
import classes from "./ChatHistory.module.css";

export default function ChatHistory(props) {
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp.seconds * 1000).toDateString();
    const time = new Date(timestamp.seconds * 1000).toLocaleTimeString()
    return `${date} at ${time}`;
  }
  return (
    <div className={classes.chatHistory}>
      <h2>Chat history</h2>
      <div className={classes.chatButtons}>
        {props.loadedChats.reverse().map((chat) => {
          return (
            <button>
              {chat.title ? chat.title : formatTimestamp(chat.createdAt)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
