import React, { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";

export default function CloseArchiveMode() {
  const { setIsArchiveMode } = useContext(ChatContext);
  return (
    <div className="h-fit w-full justify-center p-4 bg-black/10 flex-col-center ">
      <button
        className="h-fit w-fit justify-center rounded-full border-2 border-blossom-800 bg-blossom-200 p-1 px-4 text-center text-sm font-bold text-blossom-800 hover:text-blossom-100 hover:bg-blossom-400 hover:border-blossom-200
        active:text-blossom-400 active:bg-blossom-100 active:border-blossom-200"
        onClick={() => {
          setIsArchiveMode(false);
        }}
      >
        CLOSE ARCHIVE MODE
      </button>
    </div>
  );
}
