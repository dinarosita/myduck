import React, { useContext, useEffect, useRef, useState } from "react";
import classes from "./AddChat.module.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { AllChatsContext } from "../layout/Layout";
import { MainChatIdContext } from "../layout/Content";

export default function AddChat(props) {
  const { setAllChats } = useContext(AllChatsContext);
  const { setMainChatId } = useContext(MainChatIdContext);
  const titleRef = useRef();

  const [showStartButton, setShowStartButton] = useState(true);
  const [showInputForm, setShowInputForm] = useState(false);

  const handleStartButton = () => {
    setShowStartButton(false);
    setShowInputForm(true);
  };

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, [showInputForm]);

  function addNewChat(event) {
    event.preventDefault();

    const chatData = {
      title: titleRef.current.value ? titleRef.current.value : null,
      createdAt: firebase.firestore.Timestamp.now(),
    };
    fetch("https://myduck-fb785-default-rtdb.firebaseio.com/chats.json", {
      method: "POST",
      body: JSON.stringify(chatData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        updateLocalChats(data.name);
        setShowStartButton(true);
        setShowInputForm(false);
      });
  }

  function updateLocalChats(chatId) {
    fetch(
      `https://myduck-fb785-default-rtdb.firebaseio.com/chats/${chatId}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        const latestChat = {
          id: chatId,
          ...data,
        };
        setAllChats((prevAllChats) => prevAllChats.concat(latestChat));
        setMainChatId(chatId);
      });
  }

  function handleCancel() {
    setShowStartButton(true);
    setShowInputForm(false);
  }
  return (
    <div className={classes.addChat}>
      {showStartButton && (
        <button onClick={handleStartButton} className={classes.addButton}>
          Start new chat
        </button>
      )}
      {showInputForm && (
        <form onSubmit={addNewChat}>
          <label htmlFor="title">Submit chat title:</label>
          <input id="title" type="text" ref={titleRef} />
          <input type="submit" hidden="true" />
          <div className={classes.buttons}>
            <button onClick={handleCancel}>Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}
