import React, { useContext } from "react";
import { ChatMessagesContext } from "../layout/Main";
import classes from "./MessageHistory.module.css";

export default function MessageHistory(props) {
  const mainChat = useContext(ChatMessagesContext);

  if (props.isLoading) {
    return <div>Loading messages...</div>;
  }
  return (
    <div className={classes.messages}>
      {mainChat.map((msg) => (
        <div key={msg.id} className={classes.messageBubble}>
          {msg.message}
        </div>
      ))}
    </div>
  );
}
