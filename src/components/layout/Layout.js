import React, { useEffect, useState } from "react";
import classes from "./Layout.module.css";
import Navigation from "./Navigation";

import Header from "./Header";
import Main from "./Main";

export const ChatContext = React.createContext();

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedChats, setLoadedChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

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
          chats.push(chat);
        }
        setIsLoading(false);
        setLoadedChats(chats);
        setSelectedChat(chats[chats.length-1]);
      });
  }, []);

  return (
    <body>
      <Header />
      <ChatContext.Provider value={selectedChat}>
        <div className={classes.bodyBulk}>
          <Navigation isLoading={isLoading} loadedChats={loadedChats} />
          <Main isLoading={isLoading} loadedChats={loadedChats} />
        </div>
      </ChatContext.Provider>
    </body>
  );
}
