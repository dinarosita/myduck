import React, { useContext, useRef } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import ChatListContext from "../../contexts/ChatListContext";
import IconButton from "../ui/IconButton";

export default function AddChat() {
  const { setChatList, setMainChatId } = useContext(ChatListContext);

  const titleRef = useRef();

  function cancelNewChat(e) {
    e.preventDefault();
    titleRef.current.value = "";
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
      className="flex w-full flex-col items-center gap-2 p-1 "
    >
      <input
        id="title"
        type="text"
        ref={titleRef}
        placeholder="+ chatroom"
        className="input-main-forced h-thin w-56 "
      />
      <input type="submit" hidden="true" flex-none />
      <div>
        {" "}
        <IconButton ionic="close-circle" onClick={cancelNewChat} />
        <IconButton ionic="checkmark-circle" onClick={postNewChat} />
      </div>
    </form>
  );
}
