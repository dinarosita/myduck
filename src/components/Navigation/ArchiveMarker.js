import React, { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
import IconButton from "../Common/IconButton";
import useToggleMode from "../../hooks/useToggleMode";

export default function ArchiveHeader() {
  const { hasArchived, isArchiveMode } =
    useContext(ChatContext);
    const { switchToArchiveMode, switchToNormalMode} = useToggleMode()

  if (!hasArchived) return <></>;

  function handleArchiveMode(isArchiveMode) {
    if (isArchiveMode) {
      switchToNormalMode()
    } else {
      switchToArchiveMode()
    }
  }
  return (
    <>
      {!isArchiveMode && <hr className="archive-separator" />}
      <div
        className={`flex h-8 w-full cursor-pointer flex-row justify-left py-2 pl-2 pr-4 leading-none ${isArchiveMode && "font-bold"}`}
        onClick={() => handleArchiveMode(isArchiveMode)}
      >
        <div className="items-left px-2">Archive</div>
        <IconButton
          task={isArchiveMode ? "closeArchive" : "openArchive"}
          addButtonClass="h-4 w-4"
          addIconClass=""
        />
      </div>
      {isArchiveMode && <hr className="archive-separator" />}
    </>
  );
}
