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
      window.location.reload(false);
    });
  }

  const sectionTitle = props.noChat ? "Let's get started!" : "New topic?";

  return (
    <div className={classes.addChat}>
      <h3>{sectionTitle}</h3>
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
