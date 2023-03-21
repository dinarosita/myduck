import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./AddChat.module.css";

export default function AddChat() {
  const [isButton, setIsButton] = useState(true);
  const titleRef = useRef();
  const history = useHistory();

  function showBox() {
    setIsButton(false);
  }

  function addNewChat(event) {
    event.preventDefault();
    const enteredTitle = titleRef.current.value ? titleRef.current.value : "Quack quack";
    const chatData = {
      title: enteredTitle,
      messages: [],
    };
    fetch("https://myduck-fb785-default-rtdb.firebaseio.com/chats.json", {
      method: "POST",
      body: JSON.stringify(chatData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      setIsButton(true);
      history.replace("/");
    });
  }

  return (
    <div className={classes.addChat}>
      <h3>New topic?</h3>
      {isButton ? (
        <button onClick={showBox}>Start a new chat</button>
      ) : (
        <form>
          <label htmlFor="title">Enter chat title:</label>
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
