import { createContext, useContext, useEffect, useState } from "react";
import { DATABASE_URL } from "../config";
import ChatContext from "./ChatContext";

const StageContext = createContext({
  isPageLoading: true,
  isNewUser: false,
  setIsNewUser: () => {},
  isDormantUser: false,
  setIsDormantUser: () => {},
});

export function StageContextProvider(props) {
  const {
    setChatList,
    setMainChatId,
    updateMainChatId,
    findLastActiveId,
  } = useContext(ChatContext);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isNewUser, setIsNewUser] = useState(false);
  const [isDormantUser, setIsDormantUser] = useState(false);

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
        if (!data) {
          handleNewUser()
        } else {
          handleExistingUser(data)
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
    // eslint-disable-next-line
  }, []);

  function handleNewUser() {
    console.log("New user");
    setIsNewUser(true);
    localStorage.setItem("storageChatId", null);
  }

  function handleExistingUser(data) {
    const chats = []
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

    if (
      chats.some(
        (chat) => chat.id === storedChatId && chat.archived === false
      )
    ) {
      setMainChatId(storedChatId);
    } else {
      const lastId = findLastActiveId(chats);
      updateMainChatId(lastId);
    }
  }

  const context = {
    isPageLoading,
    isNewUser,
    setIsNewUser,
    isDormantUser,
    setIsDormantUser,
  };

  return (
    <StageContext.Provider value={context}>
      {props.children}
    </StageContext.Provider>
  );
}

export default StageContext;
