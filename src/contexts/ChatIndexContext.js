import { createContext, useEffect, useState } from "react";
import { DATABASE_URL } from "../config";

const ChatIndexContext = createContext({
  isPageLoading: true,
  isNewUser: false,
  setIsNewUser: () => {},
  chatList: [],
  setChatList: () => {},
  mainChatId: null,
  updateMainChatId: () => {},
  findLastActiveId: () => {},
});

export function ChatIndexContextProvider(props) {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isNewUser, setIsNewUser] = useState(false);
  const [chatList, setChatList] = useState([]);
  const [mainChatId, setMainChatId] = useState(null);

  useEffect(() => {
    setIsPageLoading(true);
    const abortController = new AbortController();

    fetch(`${DATABASE_URL}/chatMeta.json`, {
      signal: abortController.signal,
    })
      .then((response) => {
        if (!response) {
          throw new Error("Chat list response not ok");
        }
        return response.json();
      })
      .then((data) => {
        const chats = [];
        if (!data) {
          console.log("New user");
          setIsNewUser(true);
          localStorage.setItem("storageChatId", null);
        } else {
          for (const key in data) {
            const chat = {
              id: key,
              ...data[key],
            };
            chats.push(chat);
          }
          console.log(
            `Active user with ${chats.length} chat${
              chats.length > 1 ? "s" : ""
            }`
          );

          setChatList(chats);

          const storedChatId = localStorage.getItem("storageChatId");

          if (chats.some((chat) => chat.id === storedChatId && chat.archived === false)) {
            setMainChatId(storedChatId);
          } else {
            const lastId = findLastActiveId(chats);
            updateMainChatId(lastId);
          }
        }
        setIsPageLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsPageLoading(false);
      });
    return () => {
      abortController.abort();
    };
  }, []);

  function findLastActiveId(chats) {
    for (let i = chats.length - 1; i >= 0; i--) {
      if (chats[i].archived === false) {
        return chats[i].id;
      }
    }
  }

  function updateMainChatId(newId) {
    setMainChatId(newId);
    localStorage.setItem("storageChatId", newId);
  }

  const context = {
    isPageLoading,
    isNewUser,
    setIsNewUser,
    chatList,
    setChatList,
    mainChatId,
    updateMainChatId,
    findLastActiveId,
  };

  return (
    <ChatIndexContext.Provider value={context}>
      {props.children}
    </ChatIndexContext.Provider>
  );
}

export default ChatIndexContext;
