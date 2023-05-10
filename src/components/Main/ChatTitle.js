import React, { useRef, useState } from "react";
import MenuWrapper from "../Common/MenuWrapper";
import ContextMenu from "../Common/ContextMenu";
import ArchiveModal from "../Common/ArchiveModal";
import EditTitleMode from "./EditTitleMode";

export default function ChatTitle({ title, onTitleChange, onChatArchive }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showEditMode, setShowEditMode] = useState(false);
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const inputRef = useRef();

  const menuItems = [
    { text: "Edit Title", onClick: onEdit },
    { text: "Archive Chat", onClick: onArchive },
  ];

  function onEdit() {
    setShowEditMode(true);
    setShowMenu(false);
  }

  function confirmEdit() {
    const newTitle = inputRef.current.value.trim().replace(/\s+/g, " ");
    if (newTitle !== "" || newTitle === title) {
      onTitleChange(newTitle);
    }
    setShowEditMode(false);
  }

  function onArchive() {
    setShowArchiveModal(true);
    setShowMenu(false);
  }

  function confirmArchive() {
    onChatArchive();
    setShowArchiveModal(false);
  }

  if (showEditMode) {
    return (
      <EditTitleMode
        inputRef={inputRef}
        title={title}
        confirmEdit={confirmEdit}
        setShowEditMode={setShowEditMode}
      />
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
            setIsVisible={setShowArchiveModal}
            onConfirm={confirmArchive}
            type="chat"
          />
        )}
      </MenuWrapper>
    );
  }
}
