import React, { useContext, useEffect, useRef, useState } from "react";
// import classes from "./AddChat.module.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import ChatCollectionContext from "../../context/ChatCollectionContext";

export default function AddChat() {
  const { setChatList, setMainChatId } = useContext(ChatCollectionContext);

  const titleRef = useRef();

  const [showButton, setShowButton] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowButton((prevButton) => !prevButton);
    setShowForm((prevForm) => !prevForm);
  };

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, [showForm]);

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
        toggleForm();
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
      });
  }

  return (
    <div>
      {showButton && (
        <button onClick={toggleForm}>
          Start new chat
        </button>
      )}
      {showForm && (
        <form onSubmit={postNewChat}>
          <label htmlFor="title">Submit chat title:</label>
          <input id="title" type="text" ref={titleRef} />
          <input type="submit" hidden="true" />
          <div>
            <button onClick={toggleForm}>Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}
