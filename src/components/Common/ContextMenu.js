import React, { useEffect, useRef } from "react";

export default function ContextMenu({ menuItems, setShowMenu, setShowArchiveModal }) {
  const contextMenuRef = useRef();

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line
  }, []);

  function handleItemClick(item) {
    setShowMenu(false);
    if (item.type === "edit" && item.actionLayout) {
      item.actionLayout();
    } else if (item.type === "archive") {
      setShowArchiveModal(true);
    }
  }

  function handleClickOutside(e) {
    if (contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  }
  return (
    <div
      ref={contextMenuRef}
      className="menu-box absolute left-1/2 top-1/2  flex  w-32 flex-col text-left text-sm"
    >
      {menuItems.map((item, index) => (
        <button
          key={index}
          tabIndex="0"
          className="menu-button"
          onClick={() => handleItemClick(item)}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
}
