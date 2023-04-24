/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import { DATABASE_URL } from "../config";

const UserChatsContext = createContext({
  isLoading: true,
  activeChatId: null,
  updateActiveChatId: () => {},
  isNewUser: false,
  setIsNewUser: () => {},
  userChats: [],
  setUserChats: () => {},
});

export function UserChatsContextProvider(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [activeChatId, setActiveChatId] = useState(null);
  const [isNewUser, setIsNewUser] = useState(false);
  const [userChats, setUserChats] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    fetch(`${DATABASE_URL}/chatMeta.json`, {
      signal: abortController.signal,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const chats = [];

        if (!data) {
          setIsNewUser(true);
          console.log("New user");
        } else {
          setIsNewUser(false);
          console.log("Chats available");

          for (const key in data) {
            const chat = {
              id: key,
              ...data[key],
            };

            chats.push(chat);
          }
          setUserChats(chats);

          const lastChatId = localStorage.getItem("activeChatId");

          if (lastChatId && chats.some((chat) => chat.id === lastChatId)) {
            setActiveChatId(lastChatId);
          } else {
            updateActiveChatId(chats[chats.length - 1].id);
          }
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
    return () => {
      abortController.abort();
    };
  }, []);

  function updateActiveChatId(newId) {
    localStorage.setItem("activeChatId", newId);
    setActiveChatId(newId);
  }

  const context = {
    isLoading: isLoading,
    userChats: userChats,
    setUserChats: setUserChats,
    activeChatId: activeChatId,
    updateActiveChatId: updateActiveChatId,
    isNewUser: isNewUser,
    setIsNewUser: setIsNewUser,
  };

  return (
    <UserChatsContext.Provider value={context}>
      {props.children}
    </UserChatsContext.Provider>
  );
}

export default UserChatsContext;