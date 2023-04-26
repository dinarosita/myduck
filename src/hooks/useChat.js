import { useContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import UserChatsContext from "../contexts/UserChatsContext";
import { DATABASE_URL } from "../config";

export function useChat() {
  const { isNewUser, setIsNewUser, setUserChatsData, updateActiveChatId } =
    useContext(UserChatsContext);

  function postAddChat(title) {
    const chatMeta = {
      title: title || null,
      createdAt: firebase.firestore.Timestamp.now(),
    };

    return fetch(`${DATABASE_URL}/chatMeta.json`, {
      method: "POST",
      body: JSON.stringify(chatMeta),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const chatId = data.name;
        
        updateLocalList(chatId);
        if (isNewUser) {
          setIsNewUser(false);
          console.log("New chat added. Chat is now available.");
        } else {
          console.log("New chat added. Chat list updated.");
        }
      });
  }

  function updateLocalList(chatId) {
    return fetch(`${DATABASE_URL}/chatMeta/${chatId}.json`)
      .then((response) => response.json())
      .then((data) => {
        const latestChat = {
          id: chatId,
          ...data,
        };
        setUserChatsData((prevAllChats) => prevAllChats.concat(latestChat));
        updateActiveChatId(chatId);
      });
  }

  return {
    postAddChat
  };
}
