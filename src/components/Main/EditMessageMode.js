import React, { useEffect } from "react";

export default function EditMessageMode({
  textareaRef,
  message,
  confirmEdit,
  setShowEditMode,
}) {
  useEffect(() => {
    textareaRef.current.focus();
  }, [textareaRef]);

  function cancelEdit() {
    setShowEditMode(false);
  }
  return (
    <div className="w-full flex-col-center  justify-center gap-1 text-sm">
      <textarea
        type="text"
        ref={textareaRef}
        maxLength="50"
        defaultValue={message}
        placeholder="Enter your message"
        className=" w-full  border  border-vincent-700 bg-petal text-sm caret-vincent-800"
      />
      <div className="flex flex=row gap-2 pt-1">
        <button className="title-button bg-petal" onClick={confirmEdit}>
          Confirm
        </button>
        <button className="title-button bg-petal" onClick={cancelEdit}>
          Cancel
        </button>
      </div>
    </div>
  );
}
