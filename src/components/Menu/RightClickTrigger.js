import React from "react";
import { useLongPress } from "use-long-press";

export default function RightClickTrigger({ children, onTrigger }) {
  
  function handleRightClick(e) {
    e.preventDefault();
    onTrigger();
  }

  function handleKeyDown(e) {
    if ((e.shiftKey && e.key === "F10") || e.key === "ContextMenu") {
      e.preventDefault();
      onTrigger();
    }
  }

  const bindLongPress = useLongPress(onTrigger)

  return (
    <div
      {...bindLongPress()}
      onContextMenu={handleRightClick}
      onKeyDown={handleKeyDown}
      // className="chat-title inline-block"
      tabIndex="0"
    >
      {children}
    </div>
  );
}
