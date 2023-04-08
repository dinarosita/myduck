import React, { useContext, useRef, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import MainChatContext from "../../contexts/MainChatContext";

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
    <form className="flex flex-col  relative border-sol  gap-2 
    ">
      <textarea
        id="entry"
        ref={messageRef}
        className="rounded-sm  border-sol-400 border border-dashed resize-none h-28 placeholder:text-sol text-sol-500d bg-transparent"
        placeholder="+ message..."
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
        className="text-2xl m-auto absolute bottom-0 title right-2"
      >
        <ion-icon color="sol" name="paper-plane-outline"></ion-icon>
      </button>
    </form>
  );
}
