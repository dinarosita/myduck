import { createContext, useContext, useEffect, useState } from "react";
import ChatContext from "./ChatContext";
import { DATABASE_URL } from "../config";

const StageContext = createContext({
  isPageLoading: true,
  isNewUser: false,
  setIsNewUser: () => {},
  isDormantUser: false,
  setIsDormantUser: () => {},
});

export function StageContextProvider(props) {
  const { setChatList, updateMainChatId, findLastActiveId } =
    useContext(ChatContext);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isNewUser, setIsNewUser] = useState(false);
  const [isDormantUser, setIsDormantUser] = useState(false);

  useEffect(() => {
    setIsPageLoading(true);
    const abortController = new AbortController();

    async function fetchData() {
      try {
        const response = await fetch(`${DATABASE_URL}/chatMeta.json`, {
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error("HTTP error, status = " + response.status);
        }

        const data = await response.json();

        if (!data) {
          handleNewUser();
        } else {
          handleRegularUser(data);
        }
        setIsPageLoading(false);
      } catch (error) {
        console.error("Error loading chat list: ", error);
      } finally {
        setIsPageLoading(false);
      }
    }

    fetchData();
    return () => {
      abortController.abort();
    }; // eslint-disable-next-line
  }, []);

  function handleNewUser() {
    console.log("New user");
    setIsNewUser(true);
    updateMainChatId(null);
  }

  function handleRegularUser(data) {
    const chats = [];
    let activeChat = 0;
    for (const key in data) {
      const chat = {
        id: key,
        ...data[key],
      };
      if (!chat.archived) {
        activeChat++;
      }
      chats.push(chat);
    }
    setChatList(chats);

    if (activeChat === 0) {
      handleDormantUser(chats.length);
    } else {
      handleActiveUser(chats, activeChat);
    }
  }

  function handleDormantUser(chatLength) {
    console.log(
      `Dormant user with ${chatLength} archived chat${
        chatLength > 1 ? "s" : ""
      }`
    );
    setIsDormantUser(true);
    updateMainChatId(null);
  }

  function handleActiveUser(chats, activeChat) {
    console.log(
      `Active user with ${activeChat} active chat${activeChat > 1 ? "s" : ""}`
    );

    const validStoredId = validateStorageId(chats);
    const mainId = validStoredId ? validStoredId : findLastActiveId(chats);
    updateMainChatId(mainId);
  }

  function validateStorageId(chats) {
    const storedId = localStorage.getItem("storageChatId");
    if (!storedId) {
      return null;
    } else if (
      chats.some((chat) => chat.id === storedId && chat.archived === false)
    ) {
      return storedId;
    }
    localStorage.setItem("storageChatId", null);
    return null;
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
