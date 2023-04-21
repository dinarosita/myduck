/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import GlobalConfigContext from "./GlobalConfigContext";

const ChatroomContext = React.createContext({
  chatList: [],
  setChatHistory: () => {},
  activeChatId: null,
  chatAvailable: false,
  setChatAvailable: () => {},
  updateActiveChatId: () => {},
});

export function ChatroomContextProvider(props) {

  const { mode, databaseUrl } = useContext(GlobalConfigContext);
  const [chatList, setChatHistory] = useState([]);
  const [activeChatId, setActiveChatId] = useState(
    localStorage.getItem(`${mode}-activeChatId`)
  );
  const [chatAvailable, setChatAvailable] = useState(false);
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
    localStorage.setItem(`${mode}-activeChatId`, newId);
    setActiveChatId(newId);
  }

  const context = {
    chatAvailable: chatAvailable,
    setChatAvailable: setChatAvailable,
    chatList: chatList,
    setChatHistory: setChatHistory,
    activeChatId: activeChatId,
    isLoading: isLoading,
    updateActiveChatId: updateActiveChatId,
  };

  return (
    <ChatroomContext.Provider value={context}>
      {props.children}
    </ChatroomContext.Provider>
  );
}

export default ChatroomContext;
