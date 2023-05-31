import React, { useContext } from "react";
import AddChatForm from "../Modules/AddChatForm";
import ChatContext from "../../contexts/ChatContext";
import MessageHistory from "../Modules/MessageHistory";

export default function MainBody() {
  const { isLoading, mainId, isArchiveMode } = useContext(ChatContext);

  if (isLoading) return null;

  return (
    <section
      className={`pass-overflow h-full flex-auto  p-2  ${
        isArchiveMode ? "opacity-50" : "bg-transparent/20"
      } `}
    >
      {mainId ? (
        <MessageHistory />
      ) : (
        <div className="mx-auto flex h-full w-3/4 min-w-fit pt-8">
          <AddChatForm welcome />
        </div>
      )}
    </section>
  );
}
