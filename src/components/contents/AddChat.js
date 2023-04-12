import React, { useContext, useRef } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import ChatListContext from "../../contexts/ChatListContext";
import IonicButton from "../common/IonicButton";
import FlapContext from "../../contexts/FlapContext"


export default function AddChat() {
  const { ChatAvailable, setChatAvailable, setChatList, setMainChatId } =
    useContext(ChatListContext);
    const {setFlapOpen, setOverlayVisible} = useContext(FlapContext)

  const titleRef = useRef();

  function cancelNewChat(e) {
    e.preventDefault();
    titleRef.current.value = "";
    setFlapOpen(false);
    setOverlayVisible(false)
  }

  function postNewChat(event) {
    event.preventDefault();

    const chatMeta = {
      title: titleRef.current.value ? titleRef.current.value : null,
      createdAt: firebase.firestore.Timestamp.now(),
    };

    fetch("https://myduck-fb785-default-rtdb.firebaseio.com/chats.json", {
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
        setFlapOpen(false);
        setOverlayVisible(false)
      });
  }

  function updateLocalList(chatId) {
    fetch(
      `https://myduck-fb785-default-rtdb.firebaseio.com/chats/${chatId}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        const latestChat = {
          id: chatId,
          ...data,
        };
        setChatList((prevAllChats) => prevAllChats.concat(latestChat));
        setMainChatId(chatId);
        titleRef.current.value = "";
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
        ref={titleRef}
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
