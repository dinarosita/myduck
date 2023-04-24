import React, { useContext, useRef, useState } from "react";
import "firebase/compat/firestore";
import ActiveChatContext from "../../contexts/ActiveChatContext";
import IconButton from "../Common/IconButton";
import { useMessage } from "../../hooks/useMessage";
import { sanitizeInput } from '../../utils/sanitize';
import { useWindowSize } from "../../hooks/useWindowSize";
import ChatListContext from "../../contexts/ChatListContext";


export default function AddMessage() {
    const {isLoading, chatAvailable} = useContext(ChatListContext)
  const textareaRef = useRef();
  const { id, setMessageList } = useContext(ActiveChatContext);
  const [textvalue, setTextValue] = useState("");
  const { postNewMessage, updateLocalMessages } = useMessage();
  const windowSize = useWindowSize();

  function handleTextValue(event) {
    setTextValue(event.target.value);
  }

  function handleSubmit(event) {
    if (isLoading) {
        return
    }
    event.preventDefault();

    const rawMessageContent = textareaRef.current.value;
    const sanitizedMessageContent = sanitizeInput(rawMessageContent);
    const messageContent = sanitizedMessageContent.trim();


    if (messageContent === "") {
        console.log("Empty message or white spaces only, not submitting.")
        return;
    }

    postNewMessage(id, messageContent, (messageId) => {
      updateLocalMessages(id, messageId, (latestMessage) => {
        setMessageList((prevList) => prevList.concat(latestMessage));
      });
      setTextValue("");
      if (windowSize.width > 480) {
        textareaRef.current.focus();
      }
    });
  }

  return (
    <section className={`h-fit flex-none bg-transparent text-center ${(isLoading || !chatAvailable) && "pointer-events-none opacity-50"}`}>
      <form className="relative h-fit h-full " style={{ lineHeight: 0 }}>
        <textarea
          id="entry"
          ref={textareaRef}
          maxLength="2000"
          className={`skinnyscroll h-28  max-h-60 w-full resize-y border-0 bg-transparent/20 text-white placeholder-vincent-50/80 caret-white hover:bg-transparent/50 
          `}
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
        <IconButton
          task="messageSubmit"
          onClick={handleSubmit}
          addButtonClass={`absolute bottom-2 right-2`}
        />
      </form>
    </section>
  );
}
