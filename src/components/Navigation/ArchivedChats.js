import React, { useContext, useEffect, useState } from "react";
import ChatIndexContext from "../../contexts/ChatIndexContext";

export default function ArchivedChats() {
  const { chatList } = useContext(ChatIndexContext);
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
      <div className="items-left px-2 font-bold text-blossom-200">Archive</div>
    </>
  );
}
