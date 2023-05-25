import React, { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";

export default function CloseArchiveMode() {
  const { setIsArchiveMode } = useContext(ChatContext);
  return (
    <div className="h-fit w-full justify-center p-4 bg-black/10 flex-col-center ">
      <button
        className="h-fit w-fit justify-center rounded-full border-2 border-blossom-800 bg-blossom-200 p-1 px-4 text-center text-base font-bold text-blossom-800 "
        onClick={() => {
          setIsArchiveMode(false);
        }}
      >
        CLOSE ARCHIVE MODE
      </button>
    </div>
  );
}
