/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext, useEffect, useState } from "react";
import ChatHistoryContext from "./ChatHistoryContext";
import GlobalConfigContext from "./GlobalConfigContext";

const MainChatContext = React.createContext({
  id: null,
  chatMeta: {},
  messageList: [],
  setMessageList: () => {},
  isLoading: true,
});

export function MainChatContextProvider(props) {
  const { databaseUrl } = useContext(GlobalConfigContext);
  const { mainChatId, chatList } = useContext(ChatHistoryContext);
  const [messageList, setMessageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    fetch(`${databaseUrl}/messages/${mainChatId}.json`, {
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
  }, [mainChatId]);

  const context = {
    id: mainChatId,
    chatMeta: chatList.find((chat) => chat.id === mainChatId),
    messageList: messageList,
    setMessageList: setMessageList,
    isLoading: isLoading,
  };

  return (
    <MainChatContext.Provider value={context}>
      {props.children}
    </MainChatContext.Provider>
  );
}

export default MainChatContext;
