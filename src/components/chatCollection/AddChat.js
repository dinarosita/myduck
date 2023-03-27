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
        <button
          onClick={toggleForm}
          className="border border-orange-500 border-opacity-50 text-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-500 active:text-white rounded-md py-1 px-2"
        >
          Start new chat
        </button>
      )}
      {showForm && (
        <form onSubmit={postNewChat}>
          {/* <label htmlFor="title">Submit chat title:</label> */}
          <input
            id="title"
            type="text"
            ref={titleRef}
            placeholder="Chat title..."
            className="border border-orange-500 border-opacity-50 focus:border-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:ring-opacity-50 rounded-md py-1 px-2 text-orange-600 placeholder-orange-400 w-full"
          />
          <input type="submit" hidden="true" />
          <div>
            <button
              onClick={toggleForm}
              className="border border-orange-500 border-opacity-50 text-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-500 active:text-white rounded-md py-1 px-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="border border-orange-500 border-opacity-50 text-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-500 active:text-white rounded-md py-1 px-2"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
