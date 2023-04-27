/* eslint-disable react-hooks/exhaustive-deps */

import { createContext, useEffect, useState } from "react";
import { DATABASE_URL } from "../config";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const ChatListContext = createContext({
  isPageLoading: true,
  isNewUser: false,
  localChatList: [],
  mainChatId: null,
  mainChatMeta: {},
  updateMainChat: () => {},
  addNewChat: () => {},
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
        const chats = [];

        if (!data) {
          // New User: no chat
          setIsNewUser(true);
        } else {
          // Active user: has chat

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
    if (isPageLoading) {

        if (isNewUser) {
            updateMainChat(null)
        } else if (localChatList.length > 0 && storedId !== null) {
            if (localChatList.some((chat) => chat.id === storedId)) {
                updateMainChat(storedId)
            } else {
                updateMainChat(localChatList[localChatList.length-1].id)
            }
        }
    }
  }, [isPageLoading, isNewUser, storedId, localChatList, mainChatId])

  useEffect(() => {
    if (isPageLoading) {
        if (isNewUser) {
            if (mainChatId === null && !mainChatMeta.hasOwnProperty("id")) {
                setIsPageLoading(false)
                console.log(`New user`)
            }
        } else if (localChatList.length > 0 && mainChatId !== null && mainChatMeta !== null) {
            setIsPageLoading(false)
            console.log(`Active user`)
        }
    }

  }, [isPageLoading, isNewUser, localChatList, mainChatId, mainChatMeta])

  function updateMainChat(newId) {
    setMainChatId(newId);
    setStoredId(newId);
    localStorage.setItem("lastMainId", newId);
    setMainChatMeta(
      newId ? localChatList.find((chat) => chat.id === newId) : {}
    );
    console.log(`Chats available: ${localChatList.length}. Main: ${mainChatMeta.title ? mainChatMeta.title : mainChatId}`)
  }

  async function addNewChat(title) {
    const chatMeta = {
      title: title || null,
      createdAt: firebase.firestore.Timestamp.now(),
    };

    try {
      const postResponse = await fetch(`${DATABASE_URL}/chatMeta.json`, {
        method: "POST",
        body: JSON.stringify(chatMeta),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const postData = await postResponse.json();
      const chatId = postData.name;

      const getResponsePromise = fetch(
        `${DATABASE_URL}/chatMeta/${chatId}.json`
      );

      const [getResponse] = await Promise.all([getResponsePromise]);

      const getData = await getResponse.json();

      const newChatItem = {
        id: chatId,
        ...getData,
      };

      console.log("New chat added.");
      console.log(localChatList.length)
      setLocalChatList((prevList) => [...prevList, newChatItem]);
      console.log(localChatList.length)

      updateMainChat(newChatItem.id);
      console.log(localChatList.length)

    } catch (error) {
      console.error(
        "Error occurred while adding chat and updating local list:",
        error
      );
    }
  }

  const context = {
    isPageLoading,
    isNewUser,
    localChatList,
    mainChatId,
    mainChatMeta,
    updateMainChat,
    addNewChat,
  };
  return (
    <ChatListContext.Provider value={context}>
      {props.children}
    </ChatListContext.Provider>
  );
}

export default ChatListContext;
