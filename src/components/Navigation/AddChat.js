import React, { useContext, useRef } from "react";
import { useChat } from "../../hooks/useChat";
import { sanitizeInput } from "../../utils/sanitize";
import { useWindowSize } from "../../hooks/useWindowSize";
import FlapContext from "../../contexts/FlapContext";
import IconButton from "../Common/IconButton";
import ChatListContext from "../../contexts/ChatListContext";

export default function AddChat() {
  const { setIsFlapOpen } = useContext(FlapContext);
  const inputRef = useRef();
  const { postNewChat } = useChat();
  const windowSize = useWindowSize();
  const {isLoading, chatAvailable} = useContext(ChatListContext)


  function cancelNewChat(event) {
    event.preventDefault();
    inputRef.current.value = "";
  }

  function handleSubmit(event) {
    if (isLoading) {
        return
    }
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
      className={`flex w-full flex-col items-center gap-1 px-3 h-28 flex-none justify-center ${isLoading && "pointer-events-none opacity-50"}`}
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
        className="rounded-full py-1 focus:ring-0 w-full border-2 border-blossom-300 placeholder:text-vincent-700 text-vincent-800 focus:border-blossom-500 hover:placeholder:text-vincent-400 hover:border-blossom-500"

        
      />
      <input type="submit" hidden={true} />
      <div>
        <IconButton task="chatCancel" onClick={cancelNewChat} />
        <IconButton task="chatSubmit" onClick={handleSubmit} />
      </div>
    </form>
  );
}
