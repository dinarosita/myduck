import React, { useContext, useRef } from "react";
import { useAddChat } from "../../hooks/useAddChat";
import { sanitizeInput } from "../../utils/sanitize";
import { useWindowSize } from "../../hooks/useWindowSize";
import FlapContext from "../../contexts/FlapContext";
import IconButton from "../Common/IconButton";
import ChatContext from "../../contexts/ChatContext";

export default function AddChat(props) {
  const { setIsFlapOpen } = useContext(FlapContext);
  const { isPageLoading, mainId, isArchiveMode } = useContext(ChatContext);
  const inputRef = useRef();
  const { runAddChat } = useAddChat();
  const windowSize = useWindowSize();

  function cancelAddChat(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function handleSubmit(e) {
    if (isPageLoading) {
      return;
    }
    e.preventDefault();
    const title = inputRef.current.value;
    const sanitizedTitle = sanitizeInput(title);
    runAddChat(sanitizedTitle).then(() => {
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
        (isPageLoading || isArchiveMode || !mainId) &&
        "pointer-events-none opacity-30"
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
        className={`f ocus:ring-0 w-full max-w-md rounded-full border-2 border-blossom-300 py-1 text-navy placeholder:text-vincent-700 hover:border-blossom-500   hover:placeholder:text-vincent-400 focus:border-blossom-500  ${
          props.welcome ? "text-center" : "text-left"
        }`}
      />
      <input type="submit" hidden={true} />
      <div>
        <IconButton
          task="chatCancel"
          onClick={cancelAddChat}
          addButtonClass="h-6 w-6"
        />
        <IconButton
          task="chatSubmit"
          onClick={handleSubmit}
          addButtonClass="h-6 w-6"
        />
      </div>
    </form>
  );
}
