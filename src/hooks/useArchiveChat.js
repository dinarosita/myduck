import { useContext } from "react";
import "firebase/compat/firestore";
import ChatContext from "../contexts/ChatContext";
import StageContext from "../contexts/StageContext";
import { DATABASE_URL } from "../config";

export function useArchiveChat() {
  const { setChatList, updateMainChatId, findLastActiveId } = useContext(ChatContext);
  const { setIsDormantUser } = useContext(StageContext);

  function runArchiveChat(chatList, mainChatId) {
    const newList = chatList.map((chat) => {
      if (chat.id === mainChatId) {
        return {
          ...chat,
          archived: true,
        };
      }
      return chat;
    });

    archiveChatInDatabase(mainChatId);
    setChatList(newList);
    const newChatId = findLastActiveId(newList)
    if (!newChatId) {
      setIsDormantUser(true)
    }
    updateMainChatId(newChatId);
  }

  function archiveChatInDatabase(chatId) {
    return fetch(`${DATABASE_URL}/chatMeta/${chatId}.json`, {
      method: "PATCH",
      body: JSON.stringify({ archived: true }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        console.log("Chat archived in the database");
      })
      .catch((error) => {
        console.error("Error archiving chat:", error);
      });
  }

  return {
    runArchiveChat,
  };
}
