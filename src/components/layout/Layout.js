import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Navigation from "./Navigation";
import LoadingPage from "./specialPages/LoadingPage";

import classes from "./Layout.module.css";

export const AllChatsContext = React.createContext();
export const MainChatIdContext = React.createContext();

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);
  const [allChats, setAllChats] = useState ([]);
  const [mainChatId, setMainChatId] = useState (null);

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
        setAllChats(chats);
        if (chats.length) {
            setMainChatId(chats[chats.length-1].id)
        }
      });
  }, []);

  if (isLoading) {
    return <LoadingPage />
  }
  return (
    <body>
      <Header />
      <AllChatsContext.Provider value={allChats}>
        <MainChatIdContext.Provider value={mainChatId}>
          <div className={classes.mainbody}>
            <Navigation/>
            <Main />
          </div>
        </MainChatIdContext.Provider>
      </AllChatsContext.Provider>
    </body>
  );
}
