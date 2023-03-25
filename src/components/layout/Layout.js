import React, { useEffect, useState } from "react";
import Header from "./Header";
import LoadingPage from "../specialPages/LoadingPage";
import Content from "./Content";

export const AllChatsContext = React.createContext();

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);
  const [allChats, setAllChats] = useState([]);
  const [latestId, setLatestId] = useState(null);

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
        setLatestId(chats[chats.length - 1].id);
      });
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <body>
      <Header />
      <AllChatsContext.Provider value={{ allChats, setAllChats }}>
        <Content latestId={latestId} />
      </AllChatsContext.Provider>
    </body>
  );
}
