import React, { useContext, useRef, useState } from "react";
// import classes from "./AddMessage.module.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import MainChatContext from "../../context/MainChatContext";

export default function AddMessage() {
  const { id, setMessageList } = useContext(MainChatContext);
  const [textvalue, setTextValue] = useState("");

  function handleTextValue(event) {
    setTextValue(event.target.value);
  }

  const messageRef = useRef();

  function postNewMessage(event) {
    event.preventDefault();

    const chatMeta = {
      message: messageRef.current.value,
      createdAt: firebase.firestore.Timestamp.now(),
    };
    fetch(
      `https://myduck-fb785-default-rtdb.firebaseio.com/chats/${id}/messages.json`,
      {
        method: "POST",
        body: JSON.stringify(chatMeta),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        updateLocalMessages(data.name);
        setTextValue("");
      });
  }

  function updateLocalMessages(messageId) {
    fetch(
      `https://myduck-fb785-default-rtdb.firebaseio.com/chats/${id}/messages/${messageId}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        const latestMessage = {
          id: messageId,
          ...data,
        };
        setMessageList((prevList) => prevList.concat(latestMessage));
      });
  }
  if (!id) {
    return <div></div>;
  }

  return (
    <form>
      {/* <label htmlFor="entry">Add new message</label> */}
      <textarea
        id="entry"
        ref={messageRef}
        className="border border-orange-500 border-opacity-50 focus:border-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-600 focus:ring-opacity-50 rounded-md py-2 px-4 text-orange-600 placeholder-orange-400 resize-none w-full"
        placeholder="Quack quack..."
        value={textvalue}
        onChange={handleTextValue}
        onKeyDown={(event) => {
          if (event.key === 13) {
            event.preventDefault();
            event.target.value += "\n";
          }
        }}
        required
      />
      <button
        onClick={postNewMessage}
        className="border border-orange-500 border-opacity-50 text-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-500 active:text-white rounded-md py-1 px-2"
      >
        Submit
      </button>
    </form>
  );
}
