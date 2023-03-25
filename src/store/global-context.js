import React, { useEffect, useState } from "react";

const ChatContext = React.createContext({
  chatList: [],
  mainChatId: null,
  isLoading: true,
});

export function ChatContextProvider(props) {
  const [chatList, setChatList] = useState([]);
  const [mainChatId, setMainChatId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    fetch("https://myduck-fb785-default-rtdb.firebaseio.com/chats.json", {
      signal: abortController.signal, // pass the signal to the fetch request
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
    mainChatId: mainChatId,
    isLoading: isLoading,
  };

  return (
    <ChatContext.Provider value={context}>
      {props.children}
    </ChatContext.Provider>
  );
}

export default ChatContext;
