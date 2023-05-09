import React, { useRef, useState } from "react";
import MenuWrapper from "../Common/MenuWrapper";
import ContextMenu from "../Common/ContextMenu";
import ArchiveModal from "../Common/ArchiveModal";

export default function ChatTitle({ title, onTitleChange, onChatArchive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const inputRef = useRef();
  const [showArchiveModal, setShowArchiveModal] = useState(false);

  const menuItems = [
    { text: "Edit Title", onClick: startEditing },
    { text: "Archive Chat", onClick: showArchiveConfirmation },
  ];

  function startEditing() {
    setIsEditing(true);
    setShowMenu(false);
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
    onChatArchive();
    setShowArchiveModal(false);
  }



  function showArchiveConfirmation() {
    setShowArchiveModal(true);
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
      <MenuWrapper setShowMenu={setShowMenu}>
        <h1
          tabIndex="0"
          className="h-6 hover:text-blossom-500 focus:text-blossom-500 active:text-blossom-500"
        >
          {title || "Untitled Chat"}
        </h1>
        {showMenu && (
          <ContextMenu menuItems={menuItems} setShowMenu={setShowMenu} />
        )}
        {showArchiveModal && (
          <ArchiveModal
            isVisible={showArchiveModal}
            onConfirm={handleArchive}
            setShowArchiveModal={setShowArchiveModal}
            text="Please confirm to archive this chat:"
          />
        )}
      </MenuWrapper>
    );
  }
}
