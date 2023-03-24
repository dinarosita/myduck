import React, { useEffect, useState } from "react";
import classes from "./Layout.module.css";
import Navigation from "./Navigation";

import Header from "./Header";
import Main from "./Main";

export const ChatIdContext = React.createContext();
export const SetChatIdContext = React.createContext();

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);
  const [chats, setChats] = useState([]);
  const [chatId, setChatId] = useState();

  const [mainChatId, setMainChatId] = useState("1111")
  function Callback (childData) {
    return setMainChatId(childData)
  }

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
        setChats(chats);
        setChatId(chats[chats.length - 1].id);
      });
  }, []);

  

  return (
    <body>
      <Header />
      <ChatIdContext.Provider value={chatId}>
      MainChatId: {mainChatId}
        <div className={classes.bodyBulk}>
            <Navigation isLoading={isLoading} chats={chats} handleCallback={Callback} />
          <Main isLoading={isLoading} chats={chats} />
        </div>
      </ChatIdContext.Provider>
    </body>
  );
}
