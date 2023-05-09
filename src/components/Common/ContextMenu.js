import React, { useEffect, useRef } from "react";

export default function ContextMenu({ menuItems, setShowMenu }) {
  const contextMenuRef = useRef();

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line
  }, []);

  function handleClickOutside(e) {
    if (contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  }
  return (
    <div
      ref={contextMenuRef}
      className="menu-box absolute left-1/2 top-1/2  flex  w-28 flex-col text-left text-sm"
    >
      {menuItems.map((item, index) => (
        <button
          key={index}
          tabIndex="0"
          className="menu-button"
          onClick={item.onClick}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
}
