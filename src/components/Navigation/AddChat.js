import React, { useContext, useRef } from "react";
import IonicButton from "../Common/IonicButton";
import { useChat } from "../../hooks/useChat";
import { sanitizeInput } from "../../utils/sanitize";
import { useWindowSize } from "../../hooks/useWindowSize";
import FlapContext from "../../contexts/FlapContext";

export default function AddChat() {
  const { setIsFlapOpen } = useContext(FlapContext);
  const inputRef = useRef();
  const { postNewChat } = useChat();
  const windowSize = useWindowSize();

  function cancelNewChat(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function handleSubmit(e) {
    e.preventDefault();
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
      className="flex w-full flex-col items-center gap-1 px-3 py-2"
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
        <IonicButton ionic="close-circle" onClick={cancelNewChat} />
        <IonicButton ionic="checkmark-circle" onClick={handleSubmit} />
      </div>
    </form>
  );
}
