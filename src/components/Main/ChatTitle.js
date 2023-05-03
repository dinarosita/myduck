import React, { useRef, useState } from "react";

export default function ChatTitle({ title }) {
  const [editMode, setEditMode] = useState(false);
  const editTitleRef = useRef();
  const oldTitle = title;
  return (
    <div>{editMode ? <input ref={editTitleRef} /> : <h1>{title}</h1>}</div>
  );
}
