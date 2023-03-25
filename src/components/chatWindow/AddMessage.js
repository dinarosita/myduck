import React, { useContext, useRef, useState } from "react";
import classes from "./AddMessage.module.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { MainChatIdContext } from "../layout/Content";
import { ChatMessagesContext } from "../layout/Main";

export default function AddMessage() {
  const { setChatMessages } = useContext(ChatMessagesContext);
  const { mainChatId } = useContext(MainChatIdContext);
  const [fieldtext, setFieldtext] = useState("");

  function handleFieldtext(event) {
    setFieldtext(event.target.value);
  }

  const messageRef = useRef();

  function addNewMessage(event) {
    event.preventDefault();

    const chatData = {
      message: messageRef.current.value,
      createdAt: firebase.firestore.Timestamp.now(),
    };
    fetch(
      `https://myduck-fb785-default-rtdb.firebaseio.com/chats/${mainChatId}/messages.json`,
      {
        method: "POST",
        body: JSON.stringify(chatData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        updateLocalMessages(data.name);
        setFieldtext("");
      });
  }

  function updateLocalMessages(messageId) {
    fetch(
      `https://myduck-fb785-default-rtdb.firebaseio.com/chats/${mainChatId}/messages/${messageId}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        const latestMessage = {
          id: messageId,
          ...data,
        };
        setChatMessages((prevChatMessages) =>
          prevChatMessages.concat(latestMessage)
        );
      });
  }

  return (
    <form className={classes.addMessage}>
      <label htmlFor="entry">Add new message</label>
      <textarea
        id="entry"
        ref={messageRef}
        value={fieldtext}
        onChange={handleFieldtext}
        required
      />
      <button onClick={addNewMessage}>Submit</button>
    </form>
  );
}
