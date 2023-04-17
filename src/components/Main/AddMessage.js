import React, { useContext, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import MainChatContext from "../../contexts/MainChatContext";
import IonicButton from "../Common/IonicButton";
import FlapContext from "../../contexts/FlapContext";
import FocusContext from "../../contexts/FocusContext";
import GlobalConfigContext from "../../contexts/GlobalConfigContext";

export default function AddMessage() {
  const { databaseUrl } = useContext(GlobalConfigContext);
  const { msgFormRef } = useContext(FocusContext);
  const { id, setMessageList } = useContext(MainChatContext);
  const [textvalue, setTextValue] = useState("");
  const { isFlapOpen } = useContext(FlapContext);

  function handleTextValue(event) {
    setTextValue(event.target.value);
  }

  function postNewMessage(event) {
    event.preventDefault();

    const chatMeta = {
      message: msgFormRef.current.value,
      createdAt: firebase.firestore.Timestamp.now(),
    };
    fetch(`${databaseUrl}/${id}/messages.json`, {
      method: "POST",
      body: JSON.stringify(chatMeta),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        updateLocalMessages(data.name);
        setTextValue("");
        msgFormRef.current.focus();
      });
  }

  function updateLocalMessages(messageId) {
    fetch(`${databaseUrl}/${id}/messages/${messageId}.json`)
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
    <section className="flex-none h-fit text-center ">
      <form className="relative h-fit h-full" style={{ lineHeight: 0 }}>
        <textarea
          id="entry"
          ref={msgFormRef}
          className="input-main-forced scrollmsg  w-full resize-y h-28 max-h-textmax"
          placeholder="+ message..."
          style={{
            minHeight: '60px',
          }}
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
          addClass={`absolute bottom-2 right-2 ${isFlapOpen && "z-[-10]"}`}
        />
      </form>
    </section>
  );
}
