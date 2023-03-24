import React, { useContext, useEffect, useState } from "react";
import { MainChatIdContext } from "../Layout";
import classes from "./MessageHistory.module.css";

export default function MessageHistory() {
  const [isLoading, setIsLoading] = useState(true);
  const [allMessages, setAllMessages] = useState([]);
  const mainChatId = useContext(MainChatIdContext);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://myduck-fb785-default-rtdb.firebaseio.com/chats/${mainChatId}/messages.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const dataMessages = [];
        for (const key in data) {
          const message = {
            id: key,
            ...data[key],
          };
          dataMessages.push(message);
        }
        setIsLoading(false);
        setAllMessages(dataMessages);
      });
  }, [mainChatId]);

  if (isLoading) {
    return <div>Loading message history...</div>;
  }
  return (
    <div className={classes.messages}>
      {allMessages.map((msg) => (
        <div key={msg.id} className={classes.messageBubble}>
          {msg.message}
        </div>
      ))}
    </div>
  );
}
