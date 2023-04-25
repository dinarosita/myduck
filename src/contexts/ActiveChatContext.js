/* eslint-disable react-hooks/exhaustive-deps */

import React, { createContext, useContext, useEffect, useState } from "react";
import UserChatsContext from "./UserChatsContext";
import { DATABASE_URL } from "../config";

const ActiveChatContext = createContext({
  chatLoading: false,
  chatId: null,
  chatMeta: {},
  chatMessages: [],
  setChatMessages: () => {},
});

export function ActiveChatContextProvider(props) {
  const { activeChatId, userChatsData } = useContext(UserChatsContext);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatLoading, setChatLoading] = useState(false);

  useEffect(() => {
    setChatLoading(true);
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
        setChatLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      abortController.abort();
    };
  }, [activeChatId]);

  const context = {
    chatLoading: chatLoading,
    chatId: activeChatId,
    chatMeta: userChatsData.find((chat) => chat.id === activeChatId),
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
