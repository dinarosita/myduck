import React, { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";

export default function ArchiveModal({ setShowArchiveModal, onConfirm }) {
  const { isArchiveMode } = useContext(ChatContext);
  function handleCancel() {
    setShowArchiveModal(false);
  }
  return (
    <div className="flex-col-center fixed left-0 top-0 z-20 h-full w-full bg-black/60">
      <div className="m-auto h-fit w-fit rounded-3xl border-4 border-blossom-500 bg-petal px-8 py-4">
        <p className="text-md font-bold text-navyhover">
          Please confirm to {isArchiveMode ? "revive" : "archive"} this chat:
        </p>
        <div className="flex flex-row justify-center gap-2 pt-2">
          <button onClick={onConfirm} className="title-button">
            Confirm
          </button>
          <button onClick={handleCancel} className="title-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
