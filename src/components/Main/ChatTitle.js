import React, { useRef } from "react";
import EditTitleMode from "./EditTitleMode";

export default function ChatTitle({
  title,
  onTitleChange,
  showEditMode,
  setShowEditMode,
}) {
  const inputRef = useRef();

  function confirmEdit() {
    const newTitle = inputRef.current.value.trim().replace(/\s+/g, " ");
    if (newTitle !== "" || newTitle === title) {
      onTitleChange(newTitle);
    }
    setShowEditMode(false);
  }

  return showEditMode ? (
    <EditTitleMode
      inputRef={inputRef}
      title={title}
      confirmEdit={confirmEdit}
      setShowEditMode={setShowEditMode}
    />
  ) : (
    <h1
      tabIndex="0"
      className="min-h-7"
      style={{ lineHeight: '1.5rem' }}


    >
      {title || "Untitled Chat"}
    </h1>
  );
}
