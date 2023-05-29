import React, { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
import ArchiveHeader from "./ArchiveHeader";
import ChatList from "./ChatList";

export default function NavBody() {
  const { isPageLoading, isArchiveMode, activeExist, archivedExist } =
    useContext(ChatContext);
  if (isPageLoading) {
    return (
      <div className="items-left pass-overflow flex w-full flex-col justify-between gap-2 p-2 text-petal">
        Loading chats...
      </div>
    );
  }
  if (!activeExist && !archivedExist) {
    return (
      <div className="items-left pass-overflow flex w-full flex-col justify-between gap-2 p-2 text-petal">
        Waiting for your first chat!
      </div>
    );
  }
  return (
    <div className={`pass-overflow flex flex-col text-petal $`}>
    {activeExist && isArchiveMode && <ArchiveHeader />}
      <div className={`items-left pass-overflow flex w-full flex-col justify-between gap-2 p-2  `}>
        <ChatList />
      </div>
      {archivedExist && !isArchiveMode && <ArchiveHeader />}
    </div>
  );
}
