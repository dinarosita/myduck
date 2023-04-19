/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import GlobalConfigContext from "./GlobalConfigContext";


const ChatHistoryContext = React.createContext({
  chatList: [],
  setChatHistory: () => {},
  mainChatId: null,
  isLoading: true,
  ChatAvailable: false,
  setChatAvailable: () => {},
  updateMainChatId: () => {},
});

export function ChatHistoryContextProvider(props) {

  const { mode, databaseUrl } = useContext(GlobalConfigContext);
  const [chatList, setChatHistory] = useState([]);
  const [mainChatId, setMainChatId] = useState(
    localStorage.getItem(`${mode}-mainChatId`)
  );
  const [ChatAvailable, setChatAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    fetch(`${databaseUrl}/chatMeta.json`, {
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
            setChatHistory(chats);
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
    localStorage.setItem(`${mode}-mainChatId`, newId);
    setMainChatId(newId);
  }

  const context = {
    ChatAvailable: ChatAvailable,
    setChatAvailable: setChatAvailable,
    chatList: chatList,
    setChatHistory: setChatHistory,
    mainChatId: mainChatId,
    isLoading: isLoading,
    updateMainChatId: updateMainChatId,
  };

  return (
    <ChatHistoryContext.Provider value={context}>
      {props.children}
    </ChatHistoryContext.Provider>
  );
}

export default ChatHistoryContext;
