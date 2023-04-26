import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { DATABASE_URL } from "../config";

export function useMessage() {

  function postAddMessage(chatId, addMessage, callback) {
    const messageData = {
      message: addMessage,
      createdAt: firebase.firestore.Timestamp.now(),
    };

    fetch(`${DATABASE_URL}/messages/${chatId}.json`, {
      method: "POST",
      body: JSON.stringify(messageData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (callback) {
          callback(data.name);
        }
      });
  }

  function updateLocalMessages(chatId, messageId, callback) {
    fetch(`${DATABASE_URL}/messages/${chatId}/${messageId}.json`)
      .then((response) => response.json())
      .then((data) => {
        const latestMessage = {
          id: messageId,
          ...data,
        };
        if (callback) {
          callback(latestMessage);
        }
        // setMessageHistory((prevList) => prevList.concat(latestMessage));
      });
  }

  return { postAddMessage, updateLocalMessages };
}
