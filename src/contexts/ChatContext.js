import { createContext, useEffect, useState } from "react";
import { DATABASE_URL } from "../config";
import { getLastActiveId } from "../utils/chatIdManagement";

const ChatContext = createContext({
  chatArray: [],
  setChatArray: () => {},
  hasActive: false,
  hasArchived: false,

  mainId: null,
  setMainId: () => {},

  isLoading: true,
  isArchiveMode: false,
  setIsArchiveMode: () => {},
});

export function ChatContextProvider(props) {
  const [chatArray, setChatArray] = useState([]);
  const [hasActive, setHasActive] = useState(false);
  const [hasArchived, setHasArchived] = useState(false);
  const [mainId, setMainId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isArchiveMode, setIsArchiveMode] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const persistedId = localStorage.getItem("persistedId");
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

        processData(data, persistedId);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading chat list: ", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setHasActive(chatArray.some((chat) => !chat.archived));
    setHasArchived(chatArray.some((chat) => chat.archived));
  }, [chatArray]);

  useEffect(() => {
    if (mainId && chatArray.some((chat) => chat.id === mainId && !chat.archived)) {
      localStorage.setItem("persistedId", mainId);
    }
  }, [mainId, chatArray]);

  function processData(data, persistedId) {
    const chats = [];
    for (const key in data) {
      const chat = {
        id: key,
        ...data[key],
      };
      chats.push(chat);
    }
    chats.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);

    setChatArray(chats);
    initializeMainId(chats, persistedId);
  }

  function initializeMainId(chats, persistedId) {
    if (!chats.some((chat) => !chat.archived)) {
      setMainId(null);
      localStorage.setItem("persistedId", null);
    } else if (persistedId) {
      chats.some((chat) => chat.id === persistedId && !chat.archived)
        ? setMainId(persistedId)
        : setMainId(getLastActiveId);
    } else {
      setMainId(getLastActiveId);
    }
  }

  const context = {
    chatArray,
    setChatArray,
    hasActive,
    hasArchived,

    mainId,
    setMainId,

    isLoading,
    isArchiveMode,
    setIsArchiveMode,
  };
  console.log(chatArray);
  return (
    <ChatContext.Provider value={context}>
      {props.children}
    </ChatContext.Provider>
  );
}

export default ChatContext;
