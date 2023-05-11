import React, { useEffect, useRef } from "react";

export default function EditTitleMode({
  inputRef,
  title,
  confirmEdit,
  setShowEditMode,
}) {
  const editTitleRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line
  }, []);

  function handleClickOutside(e) {
    if (editTitleRef.current && !editTitleRef.current.contains(e.target)) {
      setShowEditMode(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      setShowEditMode(false);
    }
  }

  return (
    <div ref={editTitleRef} className="flex w-full flex-row justify-center gap-1 text-sm">
      <input
        type="text"
        ref={inputRef}
        maxLength="50"
        defaultValue={title || ""}
        placeholder="Enter your chat title"
        className="h-7 w-full rounded-full border  border-vincent-700 bg-vincent-200/50 text-sm caret-navy text-navy"
      />
      <button className="title-button" onClick={confirmEdit}>
        Confirm
      </button>
      <button className="title-button" onClick={() => setShowEditMode(false)}>
        Cancel
      </button>
    </div>
  );
}
