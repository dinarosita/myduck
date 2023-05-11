import { useContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import ChatContext from "../contexts/ChatContext";
import { DATABASE_URL } from "../config";

export function useChat() {
  const { isNewUser, setIsNewUser, setChatList, updateMainChatId } =
    useContext(ChatContext);

  function postNewChat(title) {
    const chatMeta = {
      title: title || null,
      createdAt: firebase.firestore.Timestamp.now(),
      archived: false,
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
        
        updateLocalChatList(chatId);
        if (isNewUser) {
          setIsNewUser(false);
        } 
      });
  }


  function updateLocalChatList(chatId) {
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

  return {
    postNewChat
  };
}
