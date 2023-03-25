import React, { useRef, useState } from "react";
import classes from "./AddChat.module.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function AddChat(props) {
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
      props.requestFetch();
    });
  }

  function handleCancel () {
    setIsButton(true)
  }
  return (
    <div className={classes.addChat}>
      {isButton ? (
        <button onClick={showBox} className={classes.addButton}>Start a new chat</button>
      ) : (
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
