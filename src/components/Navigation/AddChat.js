import React, { useContext, useRef } from "react";
import { useChat } from "../../hooks/useChat";
import { sanitizeInput } from "../../utils/sanitize";
import { useWindowSize } from "../../hooks/useWindowSize";
import FlapContext from "../../contexts/FlapContext";
import IconButton from "../Common/IconButton";

export default function AddChat() {
  const { setIsFlapOpen } = useContext(FlapContext);
  const inputRef = useRef();
  const { postNewChat } = useChat();
  const windowSize = useWindowSize();

  function cancelNewChat(event) {
    event.preventDefault();
    inputRef.current.value = "";
  }

  function handleSubmit(event) {
    event.preventDefault();
    const title = inputRef.current.value;
    const sanitizedTitle = sanitizeInput(title);
    console.log(title, " into ", sanitizedTitle);
    postNewChat(sanitizedTitle).then(() => {
      inputRef.current.value = "";
    });
    if (windowSize.width < 480) {
      setIsFlapOpen(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center gap-1 px-3 h-28 flex-none justify-center"
    >
      <label htmlFor="title" className="text-lg font-bold text-petal">
        New Chat
      </label>
      <input
        id="title"
        type="text"
        maxLength="50"
        ref={inputRef}
        placeholder="+ chat title"
        className="inputbox w-full"
      />
      <input type="submit" hidden={true} />
      <div>
        <IconButton task="chatCancel" onClick={cancelNewChat} />
        <IconButton task="chatSubmit" onClick={handleSubmit} />
      </div>
    </form>
  );
}
