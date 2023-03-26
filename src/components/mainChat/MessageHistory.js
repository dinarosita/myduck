import React, { useContext } from "react";
import MainChatContext from "../../context/MainChatContext";
import classes from "./MessageHistory.module.css";

export default function MessageHistory() {
    const {messageList, isLoading} = useContext(MainChatContext)
  if (isLoading) {
    return <div>Loading messages...</div>;
  }
  return (
    <div className={classes.messages}>
      {messageList.map((msg) => (
        <div key={msg.id} className={classes.messageBubble}>
          {msg.message}
        </div>
      )).reverse()}
    </div>
  );
}
