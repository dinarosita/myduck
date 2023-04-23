/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { DATABASE_URL } from "../config";

const ChatListContext = React.createContext({
  chatList: [],
  setChatList: () => {},
  activeChatId: null,
  updateActiveChatId: () => {},
  chatAvailable: null,
  setChatAvailable: () => {},
});

export function ChatListContextProvider(props) {
  const [chatList, setChatList] = useState([]);
  const [activeChatId, setActiveChatId] = useState(
    localStorage.getItem("MyDuckActiveChatId")
  );
  const [chatAvailable, setChatAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
          console.log("Chat not available at initial loading.");
        } else {
          setChatAvailable(true);
          console.log("Chats available at initial loading.");
          for (const key in data) {
            const chat = {
              id: key,
              ...data[key],
            };
            chats.push(chat);
            setChatList(chats);
            if (!activeChatId) {
              setActiveChatId(chats[chats.length - 1].id);
            }
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
    localStorage.setItem("MyDuckActiveChatId", newId);
    setActiveChatId(newId);
  }

  const context = {
    chatAvailable: chatAvailable,
    setChatAvailable: setChatAvailable,
    chatList: chatList,
    setChatList: setChatList,
    activeChatId: activeChatId,
    isLoading: isLoading,
    updateActiveChatId: updateActiveChatId,
  };

  return (
    <ChatListContext.Provider value={context}>
      {props.children}
    </ChatListContext.Provider>
  );
}

export default ChatListContext;
