import React, { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
import IconButton from "../Common/IconButton";

export default function ArchiveHeader() {
  const { archivedChats, isArchiveMode, setIsArchiveMode } =
    useContext(ChatContext);

  if (archivedChats === 0) return <></>;

  return (
    <>
      {!isArchiveMode && <hr className="thin-separator" />}
      <div
        className="flex h-6 w-full cursor-pointer flex-row justify-between bg-blossom-800/10 py-1 pl-2 pr-4 leading-none"
        onClick={() => setIsArchiveMode((prev) => !prev)}
      >
        <div className="items-left px-2 text-blossom-200">Archived Chats</div>
        <IconButton
          task={isArchiveMode ? "closeArchive" : "openArchive"}
          addButtonClass="h-4 w-4"
          addIconClass="text-blossom-200"
        />
      </div>
      {isArchiveMode && <hr className="thin-separator" />}
    </>
  );
}
