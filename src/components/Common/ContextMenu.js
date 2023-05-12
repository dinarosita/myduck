import React, { useEffect, useRef } from "react";

export default function ContextMenu({
  menuItems,
  setShowMenu,
  setShowArchiveModal,
  className,
}) {
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
    <div ref={contextMenuRef} className={className}>
      {menuItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <button
            key={index}
            tabIndex="0"
           className="menu-icon"
            onClick={() => handleItemClick(item)}
          >
            <Icon  className="h-5" />
            {/* {item.text} */}
          </button>
        );
      })}
    </div>
  );
}
