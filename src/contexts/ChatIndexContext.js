import { createContext, useEffect, useState } from "react";
import { DATABASE_URL } from "../config";

const ChatIndexContext = createContext({
  isPageLoading: true,
  isNewUser: false,
  setIsNewUser: () => {},
  chatList: [],
  setChatList: () => {},
  mainChatMeta: {},
  updateMainChatMeta: () => {},
  updateNewChatMeta: () => {},
});

export function ChatIndexContextProvider(props) {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isNewUser, setIsNewUser] = useState(false);
  const [chatList, setChatList] = useState([]);
  const [mainChatMeta, setMainChatMeta] = useState({});

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
            chats.push(chat)
          }
          console.log(`Active user with ${chats.length} chat${(chats.length > 1) ? "s" : ""}`)

          setChatList(chats)

          const storedChatId = localStorage.getItem("storageChatId")
          const prevMeta = chats.find((chat) => chat.id === storedChatId)
          const currentMeta = prevMeta ?? chats[chats.length - 1]

          setMainChatMeta(currentMeta)
        }
        setIsPageLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsPageLoading(false)
      })
      return (() => {abortController.abort()})
  }, []);

  function updateMainChatMeta(newId) {
    const newMeta = chatList.find((chat) => chat.id === newId);
    setMainChatMeta(newMeta);
    localStorage.setItem("storageChatId", newId);
  }

  function updateNewChatMeta(newMeta) {
    setMainChatMeta(newMeta)
    localStorage.setItem("storageChatId", newMeta.id);
  }

  const context = {
    isPageLoading,
    isNewUser,
    setIsNewUser,
    chatList,
    setChatList,
    mainChatMeta,
    updateMainChatMeta,
    updateNewChatMeta,
  };

  return (
    <ChatIndexContext.Provider value={context}>
      {props.children}
    </ChatIndexContext.Provider>
  );
}

export default ChatIndexContext;
