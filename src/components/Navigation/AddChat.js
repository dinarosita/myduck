import React, { useContext, useRef } from "react";
import { useChat } from "../../hooks/useChat";
import { sanitizeInput } from "../../utils/sanitize";
import { useWindowSize } from "../../hooks/useWindowSize";
import FlapContext from "../../contexts/FlapContext";
import IconButton from "../Common/IconButton";
import ChatIndexContext from "../../contexts/ChatIndexContext";

export default function AddChat(props) {
  const { setIsFlapOpen } = useContext(FlapContext);
  const inputRef = useRef();
  const { postAddChat } = useChat();
  const windowSize = useWindowSize();
  const { isPageLoading, isNewUser } = useContext(ChatIndexContext);

  function cancelAddChat(event) {
    event.preventDefault();
    inputRef.current.value = "";
  }

  function handleSubmit(event) {
    if (isPageLoading) {
      return;
    }
    event.preventDefault();
    const title = inputRef.current.value;
    const sanitizedTitle = sanitizeInput(title);
    console.log(title, " into ", sanitizedTitle);
    postAddChat(sanitizedTitle).then(() => {
      inputRef.current.value = "";
    });
    if (windowSize.width < 480) {
      setIsFlapOpen(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex h-28 w-full flex-none  flex-col items-center justify-center px-3 
      ${
        props.nav &&
        (isPageLoading || isNewUser) &&
        "pointer-events-none opacity-50"
      }
      ${props.welcome ? "gap-2" : "gap-1"}`}
    >
      <label htmlFor="title" className="text-lg font-bold text-petal">
        {props.welcome ? "Start your first chat!" : "New Chat"}
      </label>
      <input
        id="title"
        type="text"
        maxLength="50"
        ref={inputRef}
        placeholder="+ chat title"
        className={`w-full rounded-full border-2 border-blossom-300 py-1 text-vincent-800 placeholder:text-vincent-700 hover:border-blossom-500 hover:placeholder:text-vincent-400 focus:border-blossom-500 focus:ring-0 max-w-md  ${props.welcome ? "text-center" : "text-left"}`}
      />
      <input type="submit" hidden={true} />
      <div>
        <IconButton task="chatCancel" onClick={cancelAddChat} />
        <IconButton task="chatSubmit" onClick={handleSubmit} />
      </div>
    </form>
  );
}
