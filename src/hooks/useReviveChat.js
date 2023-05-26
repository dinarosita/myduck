import { useContext } from "react";
import "firebase/compat/firestore";
import ChatContext from "../contexts/ChatContext";
import { DATABASE_URL } from "../config";

export function useReviveChat() {
  const { setChatCollection, updateIdStates } = useContext(ChatContext);

  function runReviveChat(chats, revivedId) {
    const newList = chats.map((chat) => {
      if (chat.id === revivedId) {
        return {
          ...chat,
          archived: false,
        };
      }
      return chat;
    });

    reviveChatDatabase(revivedId);
    setChatCollection(newList);
    const newId = revivedId;
    updateIdStates(newId);
  }

  async function reviveChatDatabase(chatId) {
    try {
      const response = await fetch(`${DATABASE_URL}/chatMeta/${chatId}.json`, {
        method: "PATCH",
        body: JSON.stringify({ archived: false }),
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
    runReviveChat,
  };
}
