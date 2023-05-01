import React, { useContext, useRef, useState } from "react";
import "firebase/compat/firestore";
import ChatRoomContext from "../../contexts/ChatRoomContext";
import IconButton from "../Common/IconButton";
import { useMessage } from "../../hooks/useMessage";
import { sanitizeInput } from "../../utils/sanitize";
import { useWindowSize } from "../../hooks/useWindowSize";
import ChatIndexContext from "../../contexts/ChatIndexContext";

export default function AddMessage() {
  const { isPageLoading, isNewUser } = useContext(ChatIndexContext);
  const textareaRef = useRef();
  const { chatId, setMessageList } = useContext(ChatRoomContext);
  const [textvalue, setTextValue] = useState("");
  const { postAddMessage, updateLocalMessages } = useMessage();
  const windowSize = useWindowSize();

  function handleTextValue(event) {
    setTextValue(event.target.value);
  }

  function handleSubmit(event) {
    if (isPageLoading || isNewUser) {
      return;
    }
    event.preventDefault();

    const rawMessageContent = textareaRef.current.value;
    const sanitizedMessageContent = sanitizeInput(rawMessageContent);
    const messageContent = sanitizedMessageContent.trim();

    if (messageContent === "") {
      console.log("Empty message or white spaces only, not submitting.");
      return;
    }

    postAddMessage(chatId, messageContent, (messageId) => {
      updateLocalMessages(chatId, messageId, (latestMessage) => {
        setMessageList((prevList) => prevList.concat(latestMessage));
      });
      setTextValue("");
      if (windowSize.width > 480) {
        textareaRef.current.focus();
      }
    });
  }

  return (
    <section
      className={`h-fit flex-none bg-transparent text-center ${
        (isPageLoading || isNewUser) && "pointer-events-none opacity-50"
      }`}
    >
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
