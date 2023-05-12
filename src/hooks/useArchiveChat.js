import { useContext } from "react";
import "firebase/compat/firestore";
import ChatContext from "../contexts/ChatContext";
import StageContext from "../contexts/StageContext";
import { DATABASE_URL } from "../config";

export function useArchiveChat() {
  const { setChatList, updateMainChatId, findLastActiveId } =
    useContext(ChatContext);
  const { setIsDormantUser } = useContext(StageContext);

  function runArchiveChat(chats, archivedId) {
    const newList = chats.map((chat) => {
      if (chat.id === archivedId) {
        return {
          ...chat,
          archived: true,
        };
      }
      return chat;
    });

    archiveChatDatabase(archivedId);
    setChatList(newList);
    const newId = findLastActiveId(newList);
    if (!newId) {
      setIsDormantUser(true);
    }
    updateMainChatId(newId);
  }

  async function archiveChatDatabase(chatId) {
    try {
      const response = await fetch(`${DATABASE_URL}/chatMeta/${chatId}.json`, {
        method: "PATCH",
        body: JSON.stringify({ archived: true }),
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
