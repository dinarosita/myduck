import React, { useContext } from "react";
import IconButton from "../Common/IconButton";
import { useNavButtonLogic } from "../../hooks/useNavButtonLogic";
import ChatContext from "../../contexts/ChatContext";

export default function NavTitle() {
  const { isPageLoading } = useContext(ChatContext);
  const { handleNavClose } = useNavButtonLogic();

  return (
    <div className="flex flex-row items-center justify-between p-2 pl-3 ">
      <div
        className={`text-lg font-bold leading-none text-petal ${
          isPageLoading && "text-opacity-40"
        }`}
      >
        {/* {isArchiveMode ? "Archive Mode" : "Chat history"} */}
        Chat History
      </div>
      <IconButton
        onClick={handleNavClose}
        task="navClose"
        addButtonClass="lg:hidden h-6 w-6"
      />
    </div>
  );
}
