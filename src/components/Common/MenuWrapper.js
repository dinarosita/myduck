import React from "react";
import { useLongPress } from "use-long-press";

export default function MenuWrapper({setShowMenu, children}) {
  function handleRightClick(e) {
    if (e) {
      e.preventDefault();
    }
    setShowMenu(true);
  }
  function handleKeyDown(e) {
    if (
      (e.shiftKey && e.key === "F10") ||
      e.key === "ContextMenu"
    ) {
      e.preventDefault();
      setShowMenu(true);
    } else if (e.key === "Enter") {
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
    </div>
  );
}
