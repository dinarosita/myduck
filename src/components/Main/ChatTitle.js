import React, { useRef, useState } from "react";
import MenuWrapper from "../Common/MenuWrapper";
import EditTitleMode from "./EditTitleMode";

export default function ChatTitle({ title, onTitleChange, onChatArchive }) {
  const [showEditMode, setShowEditMode] = useState(false);
  const inputRef = useRef();

  const menuItems = [
    {
      type: "edit",
      text: "Edit Title",
      actionLayout: () => setShowEditMode(true),
      confirmationFunction: null,
    },
    {
      type: "archive",
      text: "Archive Chat",
      actionLayout: null,
      confirmationFunction: onChatArchive,
    },
  ];

  function confirmEdit() {
    const newTitle = inputRef.current.value.trim().replace(/\s+/g, " ");
    if (newTitle !== "" || newTitle === title) {
      onTitleChange(newTitle);
    }
    setShowEditMode(false);
  }
  

  if (showEditMode) {
    return (
      <EditTitleMode
        inputRef={inputRef}
        title={title}
        confirmEdit={confirmEdit}
        setShowEditMode={setShowEditMode}
      />
    );
  } else {
    return (
      <MenuWrapper menuItems={menuItems}>
        <h1
          tabIndex="0"
          className="h-7 hover:text-blossom-500 focus:text-blossom-500 active:text-blossom-500"
        >
          {title || "Untitled Chat"}
        </h1>
      </MenuWrapper>
    );
  }
}
