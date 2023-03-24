import React, { useContext, useRef } from "react";
import { AllChatsContext, MainChatIdContext } from "../Layout";
import classes from "./AddMessage.module.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function AddMessage() {
  const allChats = useContext(AllChatsContext);
  const mainChatId = useContext(MainChatIdContext);

  const messageRef = useRef();

  function addNewMessage(event) {
    event.preventDefault();

    const chatData = {
      message: messageRef.current.value,
      createdAt: firebase.firestore.Timestamp.now(),
    };
    fetch(`https://myduck-fb785-default-rtdb.firebaseio.com/chats/${mainChatId}/messages.json`, {
      method: "POST",
      body: JSON.stringify(chatData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      // update main
    });
  }

  return (
    <form className={classes.addMessage}>
      <label htmlFor="entry">Add new message</label>
      <textarea id="entry" ref={messageRef} required />
      <button onClick={addNewMessage}>Submit</button>
    </form>
  );
}
