import React, { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
import ArchiveHeader from "./ArchiveHeader";
import ChatList from "./ChatList";

export default function NavBody() {
  const { isPageLoading, isArchiveMode, activeChats, archivedChats } =
    useContext(ChatContext);
  if (isPageLoading) {
    return (
      <div className="items-left pass-overflow flex w-full flex-col justify-between gap-2 p-2 text-petal">
        Loading chats...
      </div>
    );
  }
  if (activeChats.length === 0 && archivedChats.length === 0) {
    return (
      <div className="items-left pass-overflow flex w-full flex-col justify-between gap-2 p-2 text-petal">
        Waiting for your first chat!
      </div>
    );
  }
  return (
    <>
    {activeChats && isArchiveMode && <ArchiveHeader />}
      <div className={`items-left pass-overflow flex w-full flex-col justify-between gap-2 p-2 text-petal ${isArchiveMode && "bg-blossom-800/10"}`}>
        <ChatList />
      </div>
      {archivedChats && !isArchiveMode && <ArchiveHeader />}
    </>
  );
}
