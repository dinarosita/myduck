import React, { useContext, useEffect, useRef, useState } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import ChatListContext from "../../contexts/ChatListContext";

export default function AddChat() {
  const { mainChatId, setChatList, setMainChatId } = useContext(ChatListContext);


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
      {mainChatId && <h3 className="uppercase">New chat</h3>}
      {showButton && (
        <button
          onClick={toggleForm}
          className="btn uppercase text-l"
            // className="m-auto w-fit rounded-2xl border border-sol-200 bg-sol-500 px-4  py-1 text-base text-sm font-bold uppercase text-white"
        >
          Start here
        </button>
      )}
      {showForm && (
        <form onSubmit={postNewChat} className="flex flex-col gap-2">
          <input
            id="title"
            type="text"
            ref={titleRef}
            placeholder="Chat title..."
            className=" rounded-sm border border-sol-500 px-1 py-0.5 text-sol-500d placeholder-sol-500"
          />
          <input type="submit" hidden="true" />
          <div className="m-auto flex ">
            <button
              onClick={toggleForm}
              className="btn rounded-r-none border px-2 py-0 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn rounded-l-none border px-2 py-0 text-sm"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
