import React, { useEffect, useState } from "react";
import classes from "./ChatList.module.css";

export default function ChatList() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedChats, setLoadedChats] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://myduck-fb785-default-rtdb.firebaseio.com/chats.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const chats = [];

        for (const key in data) {
          const chat = {
            id: key,
            ...data[key],
          };
          console.log(chat);
          chats.push(chat);
        }

        setIsLoading(false);
        setLoadedChats(chats);
      });
  }, []);

  if (isLoading) {
    <div className={classes.chatList}>
      <h2>Chat topics...</h2>
    </div>;
  }
  return (
    <div className={classes.chatList}>
      <h2>Chat topics</h2>
      <div>
        <ul>
          {loadedChats.length
            ? loadedChats.map((chat) => {
                return <li>{chat.title}</li>;
              })
            : "Create your first chat!"}
        </ul>
      </div>
    </div>
  );
}
