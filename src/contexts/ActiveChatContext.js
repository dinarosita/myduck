/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext, useEffect, useState } from "react";
import ChatListContext from "./ChatListContext";
import { DATABASE_URL } from "../config";

const ActiveChatContext = React.createContext({
  id: null,
  chatMeta: {},
  messageList: [],
  setMessageList: () => {},
  isLoading: true,
});

export function ActiveChatContextProvider(props) {
  const { activeChatId, chatList } = useContext(ChatListContext);
  const [messageList, setMessageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    fetch(`${DATABASE_URL}/messages/${activeChatId}.json`, {
      signal: abortController.signal,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const dataMessages = [];
        for (const key in data) {
          const message = {
            id: key,
            ...data[key],
          };
          dataMessages.push(message);
        }

        setIsLoading(false);
        setMessageList(dataMessages);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });

    return () => {
      abortController.abort();
    };
  }, [activeChatId]);

  const context = {
    id: activeChatId,
    chatMeta: chatList.find((chat) => chat.id === activeChatId),
    messageList: messageList,
    setMessageList: setMessageList,
    isLoading: isLoading,
  };

  return (
    <ActiveChatContext.Provider value={context}>
      {props.children}
    </ActiveChatContext.Provider>
  );
}

export default ActiveChatContext;
