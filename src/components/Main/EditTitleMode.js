import React, { useEffect } from 'react'

export default function EditTitleMode({inputRef, title, confirmEdit, setShowEditMode}) {
  
  useEffect(() => {
    inputRef.current.focus()
  }, [inputRef])

  function cancelEdit() {
    setShowEditMode(false);
  }
  return (
    <div className="flex w-full flex-row justify-center gap-1 text-sm">
        <input
          type="text"
          ref={inputRef}
          maxLength="50"
          defaultValue={title || ""}
          placeholder="Enter your chat title"
          className="h-7 w-full rounded-full border  border-vincent-700 bg-vincent-200/50 text-sm caret-vincent-800"
        />
        <button className="title-button" onClick={confirmEdit}>
          Confirm
        </button>
        <button className="title-button" onClick={cancelEdit}>
          Cancel
        </button>
      </div>
  )
}
