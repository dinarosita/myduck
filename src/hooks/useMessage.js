import { useContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import GlobalConfigContext from "../contexts/GlobalConfigContext";

export function useMessage() {
  const { databaseUrl } = useContext(GlobalConfigContext);

  function postNewMessage(chatId, newMessage, callback) {
    const messageData = {
      message: newMessage,
      createdAt: firebase.firestore.Timestamp.now(),
    };

    fetch(`${databaseUrl}/messages/${chatId}.json`, {
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
    fetch(`${databaseUrl}/messages/${chatId}/${messageId}.json`)
      .then((response) => response.json())
      .then((data) => {
        const latestMessage = {
          id: messageId,
          ...data,
        };
        if (callback) {
          callback(latestMessage);
        }
        // setMessageList((prevList) => prevList.concat(latestMessage));
      });
  }

  return { postNewMessage, updateLocalMessages };
}
