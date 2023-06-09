import { useContext } from "react";
import "firebase/compat/firestore";
import ChatContext from "../contexts/ChatContext";
import { DATABASE_URL } from "../config";
import {getLastActiveId} from "../utils/chatIdManagement"

export function useArchiveReviveChat() {
  const { setChatArray, setMainId, setIsArchiveMode } =
    useContext(ChatContext);

  function runArchiveChat(chats, chatId, archiving) {
    const newList = chats.map((chat) => {
      if (chat.id === chatId) {
        return {
          ...chat,
          archived: archiving? true : false,
        };
      }
      return chat;
    });

    archiveChatDatabase(chatId, archiving);
    setChatArray(newList);
    const nextMainId = archiving ? getLastActiveId(newList, newList.some(chat => !chat.archived)) : chatId;
    if (!archiving) {
      setIsArchiveMode(false)
    }
    setMainId(nextMainId);
  }

  async function archiveChatDatabase(chatId, archiving) {
    try {
      const response = await fetch(`${DATABASE_URL}/chatMeta/${chatId}.json`, {
        method: "PATCH",
        body: JSON.stringify({ archived:  archiving? true : false }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }

      console.log("Chat archived in the database");
    } catch (error) {
      console.error("Error archiving chat:", error);
    }
  }

  return {
    runArchiveChat,
  };
}
