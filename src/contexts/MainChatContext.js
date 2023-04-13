import React, { useContext, useEffect, useState } from "react";
import ChatHistoryContext from "./ChatHistoryContext";

const MainChatContext = React.createContext({
  id: null,
  chatMeta: {},
  messageList: [],
  setMessageList: () => {},
  isLoading: true,
});

export function MainChatContextProvider(props) {
  const { mainChatId, chatList } = useContext(ChatHistoryContext);

  const [messageList, setMessageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    fetch(
      `https://myduck-fb785-default-rtdb.firebaseio.com/chats/${mainChatId}/messages.json`,
      {
        signal: abortController.signal,
      }
    )
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
