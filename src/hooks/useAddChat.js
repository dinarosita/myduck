import { useContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import ChatContext from "../contexts/ChatContext";
import StageContext from "../contexts/StageContext";
import { DATABASE_URL } from "../config";

export function useAddChat() {
  const { setChatList, updateMainChatId } = useContext(ChatContext);
  const { isNewUser, setIsNewUser, isDormantUser, setIsDormantUser } =
    useContext(StageContext);

  async function runAddChat(title) {
    const newChat = {
      title: title || null,
      createdAt: firebase.firestore.Timestamp.now(),
      archived: false,
    };

    try {
      const response = await fetch(`${DATABASE_URL}/chatMeta.json`, {
        method: "POST",
        body: JSON.stringify(newChat),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }

      const data = await response.json();
      await updateChatContext(data.name);
      updateStageContext();
    } catch (error) {
      console.error("Error adding new chat:", error);
    }
  }

  async function updateChatContext(chatId) {
    try {
      const response = await fetch(`${DATABASE_URL}/chatMeta/${chatId}.json`);

      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }

      const data = await response.json();
      const newMeta = {
        id: chatId,
        ...data,
      };

      setChatList((prevAllChats) => prevAllChats.concat(newMeta));
      updateMainChatId(chatId);
    } catch (error) {
      console.error("Error updating chat context: ", error);
    }
  }

  function updateStageContext() {
    if (isNewUser || isDormantUser) {
      setIsNewUser(false);
      setIsDormantUser(false);
    }
  }
  return {
    runAddChat,
  };
}
