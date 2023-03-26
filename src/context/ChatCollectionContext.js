import React, { useEffect, useState } from "react";

const ChatCollectionContext = React.createContext({
  chatList: [],
  setChatList: () => {},
  mainChatId: null,
  setMainChatId: () => {},
  isLoading: true,
});

export function ChatCollectionContextProvider(props) {
  const [chatList, setChatList] = useState([]);
  const [mainChatId, setMainChatId] = useState(null);
  

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

        for (const key in data) {
          const chat = {
            id: key,
            ...data[key],
          };
          chats.push(chat);
        }

        setIsLoading(false);
        setChatList(chats);
        setMainChatId(chats[chats.length - 1].id);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  const context = {
    chatList: chatList,
    setChatList: setChatList,
    mainChatId: mainChatId,
    setMainChatId: setMainChatId,
    isLoading: isLoading,
  };

  return (
    <ChatCollectionContext.Provider value={context}>
      {props.children}
    </ChatCollectionContext.Provider>
  );
}

export default ChatCollectionContext;
