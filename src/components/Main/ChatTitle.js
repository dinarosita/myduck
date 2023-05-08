import React, { useEffect, useRef, useState } from "react";
import { useChat } from "../../hooks/useChat"
import { useLongPress } from "use-long-press";

export default function ChatTitle({ title, onTitleChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const inputRef = useRef();
  const contextMenuRef = useRef();
  const {editChatTitle} = useChat();

  function handleContextMenu(e) {
    e.preventDefault();
    setShowContextMenu(true);
  }

  function handleLongPress() {
    setShowContextMenu(true);
  }

  const bind = useLongPress(handleLongPress);

  function handleKeyDown(e) {
    if ((e.shiftKey && e.key === "F10") || e.key === "ContextMenu") {
      e.preventDefault();
      setShowContextMenu(true)
    }
    if (e.key === "Enter") {
      setShowContextMenu(true)
    }
  }

  function handleClickOutside(e) {
    if (contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {
      setShowContextMenu(false);
    }
  }

  function startEditing() {
    setIsEditing(true);
    setShowContextMenu(false);
  }

  function cancelEditing() {
    setIsEditing(false);
  }

  function confirmEditing() {
    const newTitle = inputRef.current.value.trim().replace(/\s+/g, ' ');
    if (newTitle !== "" || newTitle === title){
      onTitleChange(newTitle);
    }
    setIsEditing(false);
  }

  useEffect(() => {
      window.addEventListener("mousedown", handleClickOutside);   
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (isEditing) {
    return (
      <div className="w-full flex flex-row justify-center gap-1 text-sm">
        <input
          type="text"
          ref={inputRef}
          maxLength="50"
          defaultValue={title || ""}
          placeholder="Enter your chat title"
          className="h-6 border border-vincent-700 bg-vincent-200/50  caret-vincent-800 w-full rounded-full text-sm"
        />
        <button className="title-button" onClick={confirmEditing}>Confirm</button>
        <button  className="title-button"  onClick={cancelEditing}>Cancel</button>
      </div>
    );
  } else {
    return (
      <div
        {...bind()}
        onKeyDown={handleKeyDown}
        onContextMenu={handleContextMenu}                 
        className="relative inline-block"
        
      >
        <h1 tabIndex="0" className="h-6 hover:text-blossom-500 active:text-blossom-500 focus:text-blossom-500">{title || "Untitled Chat"}</h1>
        {showContextMenu && (
          <div
            ref={contextMenuRef}
            className="absolute flex flex-col text-left  text-sm  top-1/2 left-1/2 w-28 menu-box"
            
          >
            <button tabIndex="0" className="menu-button" onClick={startEditing}>
              Edit Title
            </button>
            <button tabIndex="0" className="menu-button">Archive Chat</button>
          </div>
        )}
      </div>
    );
  }
}
