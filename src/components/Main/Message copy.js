import React, { useRef, useState } from "react";
import MenuWrapper from "../Common/MenuWrapper";
import ContextMenu from "../Common/ContextMenu";
import ArchiveModal from "../Common/ArchiveModal";
import EditMessageMode from "./EditMessageMode";

export default function Message({ id, message }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showEditMode, setShowEditMode] = useState(false);
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const textareaRef = useRef();

  const menuItems = [
    { text: "Edit Message", onClick: onEdit },
    { text: "Archive Message", onClick: onArchive },
  ];

  function onEdit() {
    setShowEditMode(true);
    setShowMenu(false);
  }

  function onArchive() {
    setShowArchiveModal(true);
    setShowMenu(false);
  }

  function confirmEdit() {
    // const newTitle = inputRef.current.value.trim().replace(/\s+/g, " ");
    // if (newTitle !== "" || newTitle === title) {
    //   onTitleChange(newTitle);
    // }
    setShowEditMode(false);
  }

  function confirmArchive() {
    // onChatArchive();
    setShowArchiveModal(false);
  }
  if (showEditMode) {
    return (
      <EditMessageMode
        textareaRef={textareaRef}
        message={message}
        confirmEdit={confirmEdit}
        setShowEditMode={setShowEditMode}
      />
    );
  } else {
    return (
        <div
          key={id}
          className="flex w-fit max-w-full  flex-col break-words rounded-r-3xl bg-petal/80 py-2 pl-2 pr-4 leading-tight"
        >
          {message}
        </div>
    );
  }
}
{/* <MenuWrapper setShowMenu={setShowMenu}>
  <div
    key={id}
    className="flex w-fit max-w-full  flex-col break-words rounded-r-3xl bg-petal/80 py-2 pl-2 pr-4 leading-tight"
  >
    {message}
  </div>
  {showMenu && <ContextMenu menuItems={menuItems} setShowMenu={setShowMenu} />}
  {showArchiveModal && (
    <ArchiveModal
      isVisible={showArchiveModal}
      setIsVisible={setShowArchiveModal}
      onConfirm={confirmArchive}
      type="message"
    />
  )}
</MenuWrapper>; */}
