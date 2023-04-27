import React, { useContext, useRef } from "react";
import { sanitizeInput } from "../../utils/sanitize";
import { useWindowSize } from "../../hooks/useWindowSize";
import FlapContext from "../../contexts/FlapContext";
import IconButton from "../Common/IconButton";
import ChatListContext from "../../contexts/ChatListContext";

export default function AddChat(props) {
  const { setIsFlapOpen } = useContext(FlapContext);
  const { isPageLoading, isNewUser, addNewChat } = useContext(ChatListContext);

  const inputRef = useRef();
  const windowSize = useWindowSize();

  function cancelAddChat(event) {
    event.preventDefault();
    inputRef.current.value = "";
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isPageLoading) {
      return;
    }
    const title = sanitizeInput(inputRef.current.value);
    addNewChat(title).then(() => {
      inputRef.current.value = "";
    });
    if (windowSize.width < 480) {
      setIsFlapOpen(false);
    }
  }

  return (
    // <div className="text-petal text-lg">Under Construction</div>

    <form
      onSubmit={handleSubmit}
      disabled={isPageLoading || isNewUser}
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
