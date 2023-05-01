/* eslint-disable react-hooks/exhaustive-deps */

import React, { createContext, useContext, useEffect, useState } from "react";
import ChatIndexContext from "./ChatIndexContext";
import { DATABASE_URL } from "../config";

const ChatRoomContext = createContext({
  chatId: null,
  chatMeta: {},
  messageList: [],
  setMessageList: () => {},
});

export function ChatRoomContextProvider(props) {
  const { mainChatId, chatList } = useContext(ChatIndexContext);
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(`${DATABASE_URL}/messages/${mainChatId}.json`, {
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

        setMessageList(messages);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      abortController.abort();
    };
  }, [mainChatId]);

  const context = {
    chatId: mainChatId,
    chatMeta: chatList.find((chat) => chat.id === mainChatId),
    messageList: messageList,
    setMessageList: setMessageList,
  };

  return (
    <ChatRoomContext.Provider value={context}>
      {props.children}
    </ChatRoomContext.Provider>
  );
}

export default ChatRoomContext;
