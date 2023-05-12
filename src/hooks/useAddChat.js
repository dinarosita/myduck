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

  function runAddChat(title) {
    const newChat = {
      title: title || null,
      createdAt: firebase.firestore.Timestamp.now(),
      archived: false,
    };

    return fetch(`${DATABASE_URL}/chatMeta.json`, {
      method: "POST",
      body: JSON.stringify(newChat),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .catch((error) => {
        console.error("Network error:", error);
      })
      .then((response) => response.json())
      .then((data) => {
        updateChatContext(data.name);
        updateStageContext();
      });
  }

  function updateChatContext(chatId) {
    return fetch(`${DATABASE_URL}/chatMeta/${chatId}.json`)
      .then((response) => response.json())
      .then((data) => {
        const newMeta = {
          id: chatId,
          ...data,
        };
        setChatList((prevAllChats) => prevAllChats.concat(newMeta));
        updateMainChatId(chatId);
      });
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
