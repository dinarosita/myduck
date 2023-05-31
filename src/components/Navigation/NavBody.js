import React, { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
import ArchiveMarker from "./ArchiveMarker";
import ChatHistory from "../Modules/ChatHistory";

export default function NavBody() {
  const { isLoading, isArchiveMode, hasActive, hasArchived } =
    useContext(ChatContext);
  if (isLoading) {
    return (
      <div className="items-left pass-overflow flex w-full flex-col justify-between gap-2 p-2 text-petal">
        Loading chats...
      </div>
    );
  }
  if (!hasActive && !hasArchived) {
    return (
      <div className="items-left pass-overflow flex w-full flex-col justify-between gap-2 p-2 text-petal">
        Waiting for your first chat!
      </div>
    );
  }
  return (
    <div className={`pass-overflow $ flex flex-col text-petal`}>
      {hasArchived && isArchiveMode && <ArchiveMarker />}
      <div
        className={`items-left pass-overflow flex w-full flex-col justify-between gap-2 p-2  `}
      >
        <ChatHistory />
      </div>
      {hasArchived && !isArchiveMode && <ArchiveMarker />}
    </div>
  );
}
