import React, { useContext, useRef, useState } from "react";
import "firebase/compat/firestore";
import MainChatContext from "../../contexts/MainChatContext";
import IonicButton from "../Common/IonicButton";
import { useMessage } from "../../hooks/useMessage";

export default function AddMessage() {
  const textareaRef = useRef();
  const { id, setMessageList } = useContext(MainChatContext);
  const [textvalue, setTextValue] = useState("");
  const { postNewMessage, updateLocalMessages } = useMessage();

  function handleTextValue(e) {
    setTextValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const messageContent = textareaRef.current.value.trim();

    if (messageContent === "") {
        console.log("Empty message or white spaces only, not submitting.")
        return;
    }

    postNewMessage(id, messageContent, (messageId) => {
      updateLocalMessages(id, messageId, (latestMessage) => {
        setMessageList((prevList) => prevList.concat(latestMessage));
      });
      setTextValue("");
      textareaRef.current.focus();
    });
  }

  return (
    <section className="h-fit flex-none bg-transparent text-center ">
      <form className="relative h-fit h-full" style={{ lineHeight: 0 }}>
        <textarea
          id="entry"
          ref={textareaRef}
          className="scrollmsg h-28 max-h-60 w-full resize-y border-0 bg-transparent/20 text-white placeholder-vincent-50/80 caret-white hover:bg-transparent/50
          "
          placeholder="+ message..."
          style={{
            minHeight: "60px",
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
          onClick={handleSubmit}
          addClass={`absolute bottom-2 right-2`}
        />
      </form>
    </section>
  );
}
