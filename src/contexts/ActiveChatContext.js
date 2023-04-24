/* eslint-disable react-hooks/exhaustive-deps */

import React, { createContext, useContext, useEffect, useState } from "react";
import UserChatsContext from "./UserChatsContext";
import { DATABASE_URL } from "../config";

const ActiveChatContext = createContext({
  chatId: null,
  chatMeta: {},
  chatMessages: [],
  setChatMessages: () => {},
});

export function ActiveChatContextProvider(props) {
  const { activeChatId, userChats } = useContext(UserChatsContext);
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(`${DATABASE_URL}/messages/${activeChatId}.json`, {
      signal: abortController.signal,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const messages = [];
        for (const key in data) {
          const message = {
            id: key,
            ...data[key],
          };
          messages.push(message);
        }

        setChatMessages(messages);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      abortController.abort();
    };
  }, [activeChatId]);

  const context = {
    chatId: activeChatId,
    chatMeta: userChats.find((chat) => chat.id === activeChatId),
    chatMessages: chatMessages,
    setChatMessages: setChatMessages,
  };

  return (
    <ActiveChatContext.Provider value={context}>
      {props.children}
    </ActiveChatContext.Provider>
  );
}

export default ActiveChatContext;
