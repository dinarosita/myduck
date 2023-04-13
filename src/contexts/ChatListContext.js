/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";

const ChatListContext = React.createContext({
  chatList: [],
  setChatList: () => {},
  mainChatId: null,
  isLoading: true,
  ChatAvailable: false,
  setChatAvailable: () => {},
  updateMainChatId: () => {},
});

export function ChatListContextProvider(props) {
  const [chatList, setChatList] = useState([]);
  const [mainChatId, setMainChatId] = useState(
    localStorage.getItem("mainChatId")
  );
  const [ChatAvailable, setChatAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    fetch("https://myduck-fb785-default-rtdb.firebaseio.com/chats.json", {
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
            if (!mainChatId) {
              setMainChatId(chats[chats.length - 1].id);
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

  function updateMainChatId(newId) {
    localStorage.setItem("mainChatId", newId);
    setMainChatId(newId);
  }

  const context = {
    ChatAvailable: ChatAvailable,
    setChatAvailable: setChatAvailable,
    chatList: chatList,
    setChatList: setChatList,
    mainChatId: mainChatId,
    isLoading: isLoading,
    updateMainChatId: updateMainChatId,
  };

  return (
    <ChatListContext.Provider value={context}>
      {props.children}
    </ChatListContext.Provider>
  );
}

export default ChatListContext;
