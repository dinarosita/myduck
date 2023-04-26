/* eslint-disable react-hooks/exhaustive-deps */

import { createContext, useEffect, useState } from "react";
import { DATABASE_URL } from "../config";

const ChatListContext = createContext({
  isPageLoading: true,
  isNewUser: false,
  localChatList: [],
  mainChatId: null,
  mainChatMeta: {},
});

export function ChatListContextProvider(props) {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isNewUser, setIsNewUser] = useState(false);
  const [localChatList, setLocalChatList] = useState([]);
  const [storedId, setStoredId] = useState(null);
  const [mainChatId, setMainChatId] = useState(null);
  const [mainChatMeta, setMainChatMeta] = useState({});

  useEffect(() => {
    setIsPageLoading(true);
    setStoredId(localStorage.getItem("lastMainId"));
    // const abortController = new AbortController();

    async function fetchData() {
      try {
        const response = await fetch(
          `${DATABASE_URL}/chatMeta.json` /*, {
                signal: abortController.signal,
              }*/
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Data:", data);
        const chats = [];
        console.log("Yahoo");

        if (!data) {
          // New User: no chat
          console.log("New user");
          setIsNewUser(true);
          updateMainChat(null);
          setIsPageLoading(false);
          console.log("New user");
        } else {
          // Active user: has chat
          console.log("Active user");

          setIsNewUser(false);

          for (const key in data) {
            const chat = {
              id: key,
              ...data[key],
            };

            chats.push(chat);
          }
          setLocalChatList(chats);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    // return () => { abortController.abort(); };
  }, []);

  useEffect(() => {
    if (isPageLoading && localChatList.length > 0 && storedId !== null) {
      if (localChatList.some((chat) => chat.id === storedId)) {
        console.log("Valid id");

        updateMainChat(storedId);
      } else {
        console.log("Invalid id or null");

        updateMainChat(localChatList[localChatList.length - 1].id);
      }
    }
  }, [isPageLoading, localChatList, storedId]);

  useEffect(() => {
    if (mainChatId !== null && mainChatMeta.id) {
      setIsPageLoading(false);
    }
  }, [mainChatId, mainChatMeta]);

  function updateMainChat(newId) {
    console.log("Update main chat with id: ", newId);
    setMainChatId(newId);
    setStoredId(newId);
    localStorage.setItem("lastMainId", newId);
    setMainChatMeta(
      newId ? localChatList.find((chat) => chat.id === newId) : {}
    );
  }

  const context = {
    isPageLoading,
    isNewUser,
    localChatList,
    mainChatId,
    mainChatMeta,
  };
  return (
    <ChatListContext.Provider value={context}>
      {props.children}
    </ChatListContext.Provider>
  );
}

export default ChatListContext;
