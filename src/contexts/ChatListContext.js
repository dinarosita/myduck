import React, { useEffect, useState } from "react";

const ChatListContext = React.createContext({
  chatList: [],
  setChatList: () => {},
  mainChatId: null,
  setMainChatId: () => {},
  isLoading: true,
  ChatAvailable: false,
  setChatAvailable: () => {}
});

export function ChatListContextProvider(props) {
  const [chatList, setChatList] = useState([]);
  const [mainChatId, setMainChatId] = useState(null);
  const [ChatAvailable, setChatAvailable] = useState(false);
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
            setChatList(chats);
            setMainChatId(chats[chats.length - 1].id);

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

  const context = {
    ChatAvailable: ChatAvailable,
    setChatAvailable: setChatAvailable,
    chatList: chatList,
    setChatList: setChatList,
    mainChatId: mainChatId,
    setMainChatId: setMainChatId,
    isLoading: isLoading,
  };

  return (
    <ChatListContext.Provider value={context}>
      {props.children}
    </ChatListContext.Provider>
  );
}

export default ChatListContext;
