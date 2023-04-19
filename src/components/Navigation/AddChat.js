import React, { useRef } from "react";
import IonicButton from "../Common/IonicButton";
import { useChat } from "../../hooks/useChat";

export default function AddChat() {
  const inputRef = useRef();
  const { postNewChat } = useChat()
  
  function cancelNewChat(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    const title = inputRef.current.value;
    postNewChat(title).then(() => {
        inputRef.current.value = "";
    })
  }
  
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center gap-1 px-3 py-2"
    >
      <label htmlFor="title" className="text-blush text-lg font-bold">
        New Chat
      </label>
      <input
        id="title"
        type="text"
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
