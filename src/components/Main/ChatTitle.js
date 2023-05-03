import React, { useRef, useState } from "react";

export default function ChatTitle({ title }) {
  const [editMode, setEditMode] = useState(false);
  const editTitleRef = useRef();
  return (
    <div>{editMode ? <input ref={editTitleRef} /> : <h1>{title}</h1>}</div>
  );
}
