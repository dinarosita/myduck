import { useContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import ChatIndexContext from "../contexts/ChatIndexContext";
import { DATABASE_URL } from "../config";

export function useChat() {
  const { isNewUser, setIsNewUser, setChatList, updateNewChatMeta } =
    useContext(ChatIndexContext);

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
        } 
      });
  }

  function updateLocalList(chatId) {
    return fetch(`${DATABASE_URL}/chatMeta/${chatId}.json`)
      .then((response) => response.json())
      .then((data) => {
        const newMeta = {
          id: chatId,
          ...data,
        };
        setChatList((prevAllChats) => prevAllChats.concat(newMeta));
        updateNewChatMeta(newMeta);
      });
  }

  return {
    postAddChat
  };
}
