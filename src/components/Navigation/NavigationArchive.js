import React, { useContext, useEffect, useState } from "react";
import ChatContext from "../../contexts/ChatContext";
import IconButton from "../Common/IconButton";
import ChatList from "./ChatList";

export default function NavigationArchive({ isArchiveMode, setIsArchiveMode }) {
  const { allChats } = useContext(ChatContext);
  const [isArchive, setIsArchive] = useState(false);

  useEffect(() => {
    setIsArchive(archiveCheck(allChats));
    // eslint-disable-next-line
  }, [allChats]);

  function archiveCheck(chats) {
    for (let i = allChats.length - 1; i >= 0; i--) {
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
      {/* <div className="items-left pass-overflow flex w-full flex-col gap-2 p-2"> */}
        <div
          className="flex h-6 w-full cursor-pointer flex-row justify-between py-1 pl-2 pr-4 leading-none"
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

        {isArchiveMode && (
          <div className="items-left pass-overflow flex w-full flex-col gap-2 p-2">
            <ul className="skyscroll flex flex-col items-start  gap-1 overflow-y-auto pr-4">
              <ChatList archiveMode />
            </ul>
          </div>
        )}
      {/* </div> */}
    </>
  );
}
