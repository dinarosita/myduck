import React, { useEffect, useRef, useState } from "react";
import { useLongPress } from "use-long-press";

export default function ChatTitle({ title, onTitleChange, onChatArchive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const inputRef = useRef();
  const contextMenuRef = useRef();
  const [showArchiveConfirm, setShowArchiveConfirm] = useState(false);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      setShowContextMenu(true);
    }
    if (e.key === "Enter") {
      setShowContextMenu(true);
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
    const newTitle = inputRef.current.value.trim().replace(/\s+/g, " ");
    if (newTitle !== "" || newTitle === title) {
      onTitleChange(newTitle);
    }
    setIsEditing(false);
  }

  function handleArchive() {
    onChatArchive()
    setShowArchiveConfirm(false);
  }

  function handleArchiveCancel() {
    setShowArchiveConfirm(false);
  }

  function showArchiveConfirmation() {
    setShowArchiveConfirm(true);
  }

  if (isEditing) {
    return (
      <div className="flex w-full flex-row justify-center gap-1 text-sm">
        <input
          type="text"
          ref={inputRef}
          maxLength="50"
          defaultValue={title || ""}
          placeholder="Enter your chat title"
          className="h-6 w-full rounded-full border  border-vincent-700 bg-vincent-200/50 text-sm caret-vincent-800"
        />
        <button className="title-button" onClick={confirmEditing}>
          Confirm
        </button>
        <button className="title-button" onClick={cancelEditing}>
          Cancel
        </button>
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
        <h1
          tabIndex="0"
          className="h-6 hover:text-blossom-500 focus:text-blossom-500 active:text-blossom-500"
        >
          {title || "Untitled Chat"}
        </h1>
        {showContextMenu && (
          <div
            ref={contextMenuRef}
            className="menu-box absolute left-1/2 top-1/2  flex  w-28 flex-col text-left text-sm"
          >
            <button tabIndex="0" className="menu-button" onClick={startEditing}>
              Edit Title
            </button>
            <button
              tabIndex="0"
              className="menu-button"
              onClick={showArchiveConfirmation}
            >
              Archive Chat
            </button>
          </div>
        )}
        {showArchiveConfirm && (
          <div className="flex-col-center fixed left-0 top-0 z-20 h-full w-full bg-black/60">
            <div className="m-auto h-fit w-fit rounded-3xl border-4 border-blossom-500 bg-petal py-4 px-8">
              <p className="text-md font-bold text-blossom-600">
                Please confirm to archive this chat:
              </p>
              <div className="flex flex-row justify-center gap-2 pt-2">
                <button onClick={handleArchive} className="title-button">
                  Confirm
                </button>
                <button onClick={handleArchiveCancel} className="title-button">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
