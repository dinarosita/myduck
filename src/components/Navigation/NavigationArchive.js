import React, { useContext, useEffect, useState } from "react";
import ChatContext from "../../contexts/ChatContext";
import IconButton from "../Common/IconButton";

export default function NavigationArchive({ isArchiveMode, setIsArchiveMode }) {
  const { chatList } = useContext(ChatContext);
  const [isArchive, setIsArchive] = useState(false);

  useEffect(() => {
    setIsArchive(archiveCheck(chatList));
    // eslint-disable-next-line
  }, [chatList]);

  function archiveCheck(chats) {
    for (let i = chatList.length - 1; i >= 0; i--) {
      if (chats[i].archived === true) {
        return true;
      }
    }
    return false;
  }

  if (!isArchive) return <></>;

  return (
    <>
      <hr className="thin-separator" />
      <div
        className="flex h-6 w-full flex-row justify-between py-1 pl-2 pr-4 leading-none cursor-pointer"
        onClick={() => setIsArchiveMode((prev) => !prev)}
      >
        <div className="items-left px-2 font-bold text-blossom-200">
          Archive
        </div>
        <IconButton
          task={isArchiveMode ? "closeArchive" : "openArchive"}
          addButtonClass="h-4 w-4"
          addIconClass="text-blossom-200"
        />
      </div>
      <hr className="fine-separator" />

      {isArchiveMode && <div>Archive mode</div>}
    </>
  );
}
