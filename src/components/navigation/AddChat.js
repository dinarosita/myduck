import React, { useContext, useEffect, useRef, useState } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import ChatListContext from "../../contexts/ChatListContext";

export default function AddChat() {
  const { setChatList, setMainChatId } = useContext(ChatListContext);

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
    <div className="flex flex-col gap-1">
      <h3 className="text-lg font-bold uppercase text-gold-500 ">
        New chat
      </h3>
      {showButton && (
        <button
          onClick={toggleForm}
          className="rounded-r-2xl border border-gold-200 px-2 py-1 text-base text-sm  uppercase text-white text-left font-bold bg-gold-300 "
        >
          Start here
        </button>
      )}
      {showForm && (
        <form onSubmit={postNewChat} className="flex flex-col gap-1">
          <input
            id="title"
            type="text"
            ref={titleRef}
            placeholder="Chat title..."
            className="inp rounded-tr-xl"
          />
          <input type="submit" hidden="true" />
          <div className="flex gap-1">
            <button
              onClick={toggleForm}
              className="btn border px-2 py-0 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn flex-1 rounded-br-xl border px-2 py-0 text-sm"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
