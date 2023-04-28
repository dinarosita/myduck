/* eslint-disable react-hooks/exhaustive-deps */

import React, { createContext, useContext, useEffect, useState } from "react";
import ChatIndexContext from "./ChatIndexContext";
import { DATABASE_URL } from "../config";

const ChatRoomContext = createContext({
  chatId: null,
  chatMeta: {},
  chatMessages: [],
  setMessageHistory: () => {},
});

export function ChatRoomContextProvider(props) {
  const { activeChatId, userChatsData } = useContext(ChatIndexContext);
  const [chatMessages, setMessageHistory] = useState([]);

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

        setMessageHistory(messages);
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
    chatMeta: userChatsData.find((chat) => chat.id === activeChatId),
    chatMessages: chatMessages,
    setMessageHistory: setMessageHistory,
  };

  return (
    <ChatRoomContext.Provider value={context}>
      {props.children}
    </ChatRoomContext.Provider>
  );
}

export default ChatRoomContext;
