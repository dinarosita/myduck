import React, { useContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import ChatHistoryContext from "../../contexts/ChatHistoryContext";
import IonicButton from "../Common/IonicButton";
import FlapContext from "../../contexts/FlapContext";
import FocusContext from "../../contexts/FocusContext";
import GlobalConfigContext from "../../contexts/GlobalConfigContext";

export default function AddChat() {
  const { databaseUrl } = useContext(GlobalConfigContext);
  const { chatFormRef, msgFormRef, focus } = useContext(FocusContext);
  const { ChatAvailable, setChatAvailable, setChatHistory, updateMainChatId } =
    useContext(ChatHistoryContext);
  const { setIsFlapOpen } = useContext(FlapContext);

  function cancelNewChat(e) {
    e.preventDefault();
    chatFormRef.current.value = "";
    setIsFlapOpen(false);
    focus(msgFormRef);
  }

  function postNewChat(event) {
    event.preventDefault();

    const chatMeta = {
      title: chatFormRef.current.value ? chatFormRef.current.value : null,
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
        setIsFlapOpen(false);
        chatFormRef.current.value = "";
        focus(msgFormRef);
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
        ref={chatFormRef}
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
