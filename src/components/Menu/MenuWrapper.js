import React, { useState } from "react";
import ContextMenu from "./ContextMenu";
import ArchiveModal from "./ArchiveModal";
import RightClickTrigger from "./RightClickTrigger";

export default function MenuWrapper({
  menuItems,
  className,
  children,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [showArchiveModal, setShowArchiveModal] = useState(false);

  return (
    <RightClickTrigger onTrigger={() => setShowMenu(true)}>
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
    </RightClickTrigger>
  );
}
