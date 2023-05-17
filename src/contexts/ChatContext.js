import { createContext, useEffect, useState } from "react";
import { DATABASE_URL } from "../config";

const ChatContext = createContext({
  chatList: [],
  activeChats: [],
  archivedChats: [],
  setChatList: () => {},
  mainChatId: null,
  setMainChatId: () => {},
  updateMainChatId: () => {},
  findLastActiveId: () => {},
  isPageLoading: true,
  isNewUser: false,
  setIsNewUser: () => {},
});

export function ChatContextProvider(props) {
  const [chatList, setChatList] = useState([]);
  const [activeChats, setActiveChats] = useState([]);
  const [archivedChats, setArchivedChats] = useState([]);
  const [mainChatId, setMainChatId] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(true);

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

        setChatLists(data);

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

  function setChatLists(data) {
    const masterList = [];
    const activeList = [];
    const archivedList = [];
    for (const key in data) {
      const chat = {
        id: key,
        ...data[key],
      };
      masterList.push(chat);
      chat.archived ? archivedList.push(chat) : activeList.push(chat);
    }
    setChatList(masterList);
    setActiveChats(activeList);
    setArchivedChats(archivedList);
    setInitialMainChatId(activeList)

  }

  function setInitialMainChatId(activeList) {
    if (!activeList) {
      updateMainChatId(null)
    } else if (activeList) {
      const storedId = localStorage.getItem("storageChatId")
      const isValidId = activeList.some(chat => chat.id === storedId)
      if (isValidId) {
        updateMainChatId(storedId)
      } else if (!isValidId) {
        const lastActiveId = findLastActiveId(activeList)
        updateMainChatId(lastActiveId)
      }
    }
  }

  function findLastActiveId(chats) {
    for (let i = chats.length - 1; i >= 0; i--) {
      if (chats[i].archived === false) {
        return chats[i].id;
      }
    }
    return null;
  }

  function updateMainChatId(newId) {
    setMainChatId(newId);
    localStorage.setItem("storageChatId", newId);
  }

  const context = {
    chatList,
    activeChats,
    archivedChats,
    setChatList,
    mainChatId,
    setMainChatId,
    updateMainChatId,
    findLastActiveId,
    isPageLoading,
  };
  return (
    <ChatContext.Provider value={context}>
      {props.children}

    </ChatContext.Provider>
  );
}

export default ChatContext;
