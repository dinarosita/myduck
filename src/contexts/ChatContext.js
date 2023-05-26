import { createContext, useEffect, useState } from "react";
import { DATABASE_URL } from "../config";

const ChatContext = createContext({
  chatCollection: [],
  setChatCollection: () => {},
  activeExist: false,
  archivedExist: false,

  mainId: null,
  setMainId: () => {},
  updateIdStates: () => {},
  getLastActiveId: () => {},

  isPageLoading: true,
  isArchiveMode: false,
  setIsArchiveMode: () => {},
});

export function ChatContextProvider(props) {
  const [chatCollection, setChatCollection] = useState([]);
  const [activeExist, setActiveExist] = useState(false);
  const [archivedExist, setArchivedExist] = useState(false);
  const [mainId, setMainId] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isArchiveMode, setIsArchiveMode] = useState(false);

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

        processData(data);
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
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function processData(data) {
    const chats = [];
    let anyActive = false;
    let anyArchived = false;
    for (const key in data) {
      const chat = {
        id: key,
        ...data[key],
      };
      chat.archived ? (anyArchived = true) : (anyActive = true);
      chats.push(chat);
    }
    chats.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);

    setChatCollection(chats);
    setActiveExist(anyActive);
    setArchivedExist(anyArchived);
    updateIdStates(determineId(chats, anyActive));
  }

  function determineId(chats, anyActive) {
    if (!anyActive) {
      return null;
    }
    const storedId = localStorage.getItem("persistedId") || null;
    if (!storedId) return getLastActiveId(chats, anyActive);

    const isStoredIdValid = validateActiveId(chats, storedId);
    return isStoredIdValid ? storedId : getLastActiveId(chats, anyActive);
  }

  function getLastActiveId(chats, anyActive) {
    if (!anyActive) return null;
    return chats.find((chat) => !chat.archived).id;
  }

  function validateActiveId(chats, storedId) {
    return chats.some((chat) => chat.id === storedId && !chat.archived);
  }

  function updateIdStates(id) {
    setMainId(id);
    localStorage.setItem("persistedId", id);
  }

  const context = {
    chatCollection,
    setChatCollection,
    activeExist,
    archivedExist,

    mainId,
    setMainId,
    updateIdStates,
    getLastActiveId,

    isPageLoading,
    isArchiveMode,
    setIsArchiveMode,
  };

  return (
    <ChatContext.Provider value={context}>
      {props.children}
    </ChatContext.Provider>
  );
}

export default ChatContext;
