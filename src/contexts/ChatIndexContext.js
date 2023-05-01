/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import { DATABASE_URL } from "../config";

const ChatIndexContext = createContext({
  isPageLoading: true,
  isNewUser: false,
  setIsNewUser: () => {},
  chatList: [],
  setChatList: () => {},
  mainChatId: null,
  updateMainChatId: () => {},
});

export function ChatIndexContextProvider(props) {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [mainChatId, setMainChatId] = useState(null);
  const [isNewUser, setIsNewUser] = useState(false);
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    setIsPageLoading(true);
    const abortController = new AbortController();

    fetch(`${DATABASE_URL}/chatMeta.json`, {
      signal: abortController.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const chats = [];

        if (!data) {
          setIsNewUser(true);
          localStorage.setItem("storageChatId", null);

          console.log("New user");
        } else {
          setIsNewUser(false);
          console.log(`Active user: ${Object.keys(data).length} chats`);

          for (const key in data) {
            const chat = {
              id: key,
              ...data[key],
            };

            chats.push(chat);
          }
          setChatList(chats);
          const storedChatId = localStorage.getItem("storageChatId");

          if (storedChatId && chats.some((chat) => chat.id === storedChatId)) {
            setMainChatId(storedChatId);
          } else {
            updateMainChatId(chats[chats.length - 1].id);
          }
        }
        setIsPageLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsPageLoading(false);
      });
    return () => {
      abortController.abort();
    };
  }, []);

  function updateMainChatId(newId) {
    localStorage.setItem("storageChatId", newId);
    setMainChatId(newId);
  }

  const context = {
    isPageLoading,
    isNewUser,
    setIsNewUser,
    chatList,
    setChatList,
    mainChatId,
    updateMainChatId,
  };

  return (
    <ChatIndexContext.Provider value={context}>
      {props.children}
    </ChatIndexContext.Provider>
  );
}

export default ChatIndexContext;
