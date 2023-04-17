import React, { useContext, useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import ChatHistoryContext from "../../contexts/ChatHistoryContext";
import IonicButton from "../Common/IonicButton";
import GlobalConfigContext from "../../contexts/GlobalConfigContext";

export default function AddChat() {
    const inputRef = useRef()
  const { databaseUrl } = useContext(GlobalConfigContext);
  const { ChatAvailable, setChatAvailable, setChatHistory, updateMainChatId } =
    useContext(ChatHistoryContext);

  function cancelNewChat(e) {
    e.preventDefault();
    inputRef.current.value = "";
    
  }

  function postNewChat(event) {
    event.preventDefault();

    const chatMeta = {
      title: inputRef.current.value ? inputRef.current.value : null,
      createdAt: firebase.firestore.Timestamp.now(),
    };

    fetch(`${databaseUrl}.json`, {
      method: "POST",
      body: JSON.stringify(chatMeta),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        updateLocalList(data.name);
        if (!ChatAvailable) {
          setChatAvailable(true);
          console.log("New chat added. Chat is now available.");
        } else {
          console.log("New chat added. Chat list updated.");
        }
        inputRef.current.value = "";
        
      });
  }

  function updateLocalList(chatId) {
    fetch(`${databaseUrl}/${chatId}.json`)
      .then((response) => response.json())
      .then((data) => {
        const latestChat = {
          id: chatId,
          ...data,
        };
        setChatHistory((prevAllChats) => prevAllChats.concat(latestChat));
        updateMainChatId(chatId);
      });
  }

  return (
    <form
      onSubmit={postNewChat}
      className="flex w-full flex-col items-center gap-2 px-1 pb-2 pt-8"

    >
      <label htmlFor="title" className="title text-lg">
        Add a New Chat
      </label>
      <input
        id="title"
        type="text"
        ref={inputRef}
        placeholder="+ chat title"
        className="input-main-forced w-full"
      />
      <input type="submit" hidden={true} />
      <div>
        <IonicButton ionic="close-circle" onClick={cancelNewChat} />
        <IonicButton ionic="checkmark-circle" onClick={postNewChat} />
      </div>
    </form>
  );
}
