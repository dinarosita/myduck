import React, { useState } from "react";
import { useLongPress } from "use-long-press";
import ContextMenu from "./ContextMenu";
import ArchiveModal from "./ArchiveModal";

export default function MenuWrapper({
  menuItems,
  showEditMode,
  className,
  children,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [showArchiveModal, setShowArchiveModal] = useState(false);

  function handleRightClick(e) {
    e.preventDefault();
    setShowMenu(true);
  }

  function handleKeyDown(e) {
    if ((e.shiftKey && e.key === "F10") || e.key === "ContextMenu") {
      e.preventDefault();
      setShowMenu(true);
    } else if (e.key === "Enter" && !showArchiveModal && !showEditMode) {
      setShowMenu(true);
    }
  }

  function handleLongPress() {
    setShowMenu(true);
  }

  const bind = useLongPress(handleLongPress);
  return (
    <div
      {...bind()}
      onContextMenu={handleRightClick}
      onKeyDown={handleKeyDown}
      className="chat-title inline-block"
      tabIndex="0"
    >
      {children}
      {showMenu && (
        <ContextMenu
          menuItems={menuItems}
          setShowMenu={setShowMenu}
          setShowArchiveModal={setShowArchiveModal}
          className={className}
        />
      )}
      {showArchiveModal && (
        <ArchiveModal
          setShowArchiveModal={setShowArchiveModal}
          setShowMenu={setShowMenu}
          onConfirm={() => {
            menuItems
              .find((item) => item.type === "revive" || item.type === "archive")
              .confirmationFunction();
            setShowArchiveModal(false);
          }}
        />
      )}
    </div>
  );
}
