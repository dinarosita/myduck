import { createContext, useEffect, useState } from "react";
import { DATABASE_URL } from "../config";

const ChatContext = createContext({
  allChats: [],
  setAllChats: () => {},
  activeChats: [],
  archivedChats: [],

  mainId: null,
  setMainId: () => {},
  updateMainId: () => {},
  getLastActiveId: () => {},

  isPageLoading: true,
});

export function ChatContextProvider(props) {
  const [allChats, setAllChats] = useState([]);
  const [activeChats, setActiveChats] = useState([]);
  const [archivedChats, setArchivedChats] = useState([]);
  const [mainId, setMainId] = useState(null);
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

        setInitialValues(data);
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

  function setInitialValues(data) {
    const chats = [];
    for (const key in data) {
      const chat = {
        id: key,
        ...data[key],
      };
      chats.push(chat);
    }
    setAllChats(chats);
    assignChatValues(chats);
  }

  function assignChatValues(allChats) {
    const active = [];
    const archived = [];

    for (const chat of allChats) {
      chat.archived ? archived.push(chat) : active.push(chat);
    }
    
    const id = determineMainId(active);
    updateMainId(id);

    setActiveChats(active);
    setArchivedChats(archived);
  }
  
  function determineMainId(active) {
    if (active) {
      const storedId = localStorage.getItem("storageMainId");
      const isValidId = active.some((chat) => chat.id === storedId);
      return isValidId ? storedId : getLastActiveId(active);
    } else {
      return null;
    }
  }

  function getLastActiveId(active) {
    for (let i = active.length - 1; i >= 0; i--) {
      if (active[i].archived === false) {
        return active[i].id;
      }
    }
    return null;
  }

  function updateMainId(id) {
    setMainId(id);
    localStorage.setItem("storageMainId", id);
  }

  const context = {
    allChats,
    setAllChats,
    activeChats,
    archivedChats,

    mainId,
    setMainId,
    updateMainId,
    getLastActiveId,

    isPageLoading,
  };
  return (
    <ChatContext.Provider value={context}>
      {props.children}
    </ChatContext.Provider>
  );
}

export default ChatContext;
