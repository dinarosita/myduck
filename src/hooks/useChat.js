import { useContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import ChatroomContext from "../contexts/ChatroomContext";
import GlobalConfigContext from "../contexts/GlobalConfigContext";

export function useChat() {
  const { databaseUrl } = useContext(GlobalConfigContext);
  const { chatAvailable, setChatAvailable, setChatHistory, updateActiveChatId } =
    useContext(ChatroomContext);

  function postNewChat(title) {
    const chatMeta = {
      title: title || null,
      createdAt: firebase.firestore.Timestamp.now(),
    };

    return fetch(`${databaseUrl}/chatMeta.json`, {
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
        if (!chatAvailable) {
          setChatAvailable(true);
          console.log("New chat added. Chat is now available.");
        } else {
          console.log("New chat added. Chat list updated.");
        }
      });
  }

  function updateLocalList(chatId) {
    return fetch(`${databaseUrl}/chatMeta/${chatId}.json`)
      .then((response) => response.json())
      .then((data) => {
        const latestChat = {
          id: chatId,
          ...data,
        };
        setChatHistory((prevAllChats) => prevAllChats.concat(latestChat));
        updateActiveChatId(chatId);
      });
  }

  return {
    postNewChat
  };
}
