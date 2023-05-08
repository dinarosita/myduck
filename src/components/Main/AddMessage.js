import React, { useContext, useRef, useState } from "react";
import "firebase/compat/firestore";
import MainChatContext from "../../contexts/MainChatContext";
import IconButton from "../Common/IconButton";
import { useMessage } from "../../hooks/useMessage";
import { sanitizeInput } from "../../utils/sanitize";
import { useWindowSize } from "../../hooks/useWindowSize";
import ChatIndexContext from "../../contexts/ChatIndexContext";

export default function AddMessage() {
  const { isPageLoading, isNewUser, mainChatId } = useContext(ChatIndexContext);
  const textareaRef = useRef();
  const { setMessageList } = useContext(MainChatContext);
  const [textvalue, setTextValue] = useState("");
  const { postAddMessage, updateLocalMessages } = useMessage();
  const windowSize = useWindowSize();

  function handleTextValue(e) {
    setTextValue(e.target.value);
  }

  function handleSubmit(e) {
    if (isPageLoading || isNewUser) {
      return;
    }
    e.preventDefault();

    const rawMessageContent = textareaRef.current.value;
    const sanitizedMessageContent = sanitizeInput(rawMessageContent);
    const messageContent = sanitizedMessageContent.trim();

    if (messageContent === "") {
      console.log("Empty message or white spaces only, not submitting.");
      return;
    }

    postAddMessage(mainChatId, messageContent, (messageId) => {
      updateLocalMessages(mainChatId, messageId, (latestMessage) => {
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
          onKeyDown={(e) => {
            if (e.key === 13) {
              e.preventDefault();
              e.target.value += "\n";
            }
          }}
        />
        <IconButton
          task="messageSubmit"
          onClick={handleSubmit}
          addButtonClass={`h-6 w-6 absolute bottom-2 right-2`}
        />
      </form>
    </section>
  );
}
