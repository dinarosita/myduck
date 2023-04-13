import React, { useContext, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import MainChatContext from "../../contexts/MainChatContext";
import IonicButton from "../common/IonicButton";
import FlapContext from "../../contexts/FlapContext";
import AutofocusContext from "../../contexts/AutofocusContext";

export default function AddMessage() {
  const {msgFormRef} = useContext(AutofocusContext);
  const { id, setMessageList } = useContext(MainChatContext);
  const [textvalue, setTextValue] = useState("");
  const { flapOpen } = useContext(FlapContext);

  function handleTextValue(event) {
    setTextValue(event.target.value);
  }

  function postNewMessage(event) {
    event.preventDefault();

    const chatMeta = {
      message: msgFormRef.current.value,
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
        msgFormRef.current.focus();
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

  return (
    <form className="relative h-fit">
      <textarea
        id="entry"
        ref={msgFormRef}
        className="input-main-forced scrollmsg h-28 w-full resize-none"
        placeholder="+ message..."
        value={textvalue}
        onChange={handleTextValue}
        onKeyDown={(event) => {
          if (event.key === 13) {
            event.preventDefault();
            event.target.value += "\n";
          }
        }}
      />
      <IonicButton
        ionic="paper-plane"
        onClick={postNewMessage}
        addClass={`absolute bottom-2 right-2 ${flapOpen && "z-[-10]"}`}
      />
    </form>
  );
}
