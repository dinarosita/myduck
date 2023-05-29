import React, { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";

export default function CloseArchiveMode() {
  const { setIsArchiveMode } = useContext(ChatContext);
  return (
    <div className="flex-col-center">
      <button
        className="flex h-fit w-fit flex-row justify-center gap-2 rounded-full border-2 border-blossom-400 bg-blossom-200 p-1 px-4 text-center text-sm font-bold text-blossom-700
         hover:bg-blossom-400 hover:text-blossom-100 active:bg-blossom-100 active:text-blossom-400 gap-3 items-"
        onClick={() => {
          setIsArchiveMode(false);
        }}
      >
        <div>ARCHIVE MODE</div>
        <div>&#x2715;</div>
      </button>
    </div>
  );
}