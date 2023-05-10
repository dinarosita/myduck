import React, { useState } from "react";
import { useLongPress } from "use-long-press";
import ContextMenu from "./ContextMenu";
import ArchiveModal from "./ArchiveModal";

export default function MenuWrapper({ menuItems, children }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showArchiveModal, setShowArchiveModal] = useState(false);


  function handleRightClick(e) {
    if (e) {
      e.preventDefault();
    }
    setShowMenu(true);
  }

  function handleKeyDown(e) {
    if ((e.shiftKey && e.key === "F10") || e.key === "ContextMenu") {
      e.preventDefault();
      setShowMenu(true);
    } else if (e.key === "Enter" && !showArchiveModal) {
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
      className="relative inline-block"
    >
      {children}
      {showMenu && (
        <ContextMenu
          menuItems={menuItems}
          setShowMenu={setShowMenu}
          setShowArchiveModal={setShowArchiveModal}
        />
      )}
      {showArchiveModal && (
        <ArchiveModal
        setShowArchiveModal={setShowArchiveModal}
        setShowMenu={setShowMenu}
          onConfirm={() => {
            menuItems
              .find((item) => item.type === "archive")
              .confirmationFunction();
            setShowArchiveModal(false);
          }}
          type="chat"
        />
      )}
    </div>
  );
}