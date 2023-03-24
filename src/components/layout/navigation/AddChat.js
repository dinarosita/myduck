import React, { useContext, useRef, useState } from "react";
import classes from "./AddChat.module.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { AllChatsContext, MainChatIdContext } from "../Layout";

export default function AddChat() {
  const allChats = useContext(AllChatsContext);
  const mainChatId = useContext(MainChatIdContext);
  const [isButton, setIsButton] = useState(true);
  const titleRef = useRef();

  function showBox() {
    setIsButton(false);
  }

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
    }).then(() => {
      setIsButton(true);
      window.location.reload(false);
    });
  }
  return (
    <div className={classes.addChat}>
      {isButton ? (
        <button onClick={showBox}>Start a new chat</button>
      ) : (
        <form>
          <label htmlFor="title">Submit chat title:</label>
          <input id="title" type="text" ref={titleRef} />
          <div className={classes.buttons}>
            <button>Cancel</button>
            <button onClick={addNewChat}>Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}
