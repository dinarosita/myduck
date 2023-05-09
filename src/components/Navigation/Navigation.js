import React, { useContext, useState } from "react";
import ChatHistory from "../Navigation/ChatHistory";
import AddChat from "../Navigation/AddChat";
import IconButton from "../Common/IconButton";
import { useNavButtonLogic } from "../../hooks/useNavButtonLogic";
import ChatIndexContext from "../../contexts/ChatIndexContext";

export default function Navigation() {
  
  const { isPageLoading, isNewUser } = useContext(ChatIndexContext);
  const { handleNavClose } = useNavButtonLogic();
  const [isActiveOnly, setIsActiveOnly] = useState(true)

  return (
    <nav className="pass-overflow blush-frame relative flex flex-col rounded-l-none bg-gradient-to-br from-vincent-500/80 via-vincent-400 to-vincent-700 ">
    
      <div className="flex flex-row items-center justify-between p-2 pl-3 ">
        <div
          className={`text-lg font-bold leading-none text-petal ${
            (isPageLoading || isNewUser) && "text-opacity-40"
          }`}
        >
          {isActiveOnly ? "Chat history" : "All chats"}
        </div>
        <IconButton
          onClick={handleNavClose}
          task="navClose"
          addButtonClass="lg:hidden h-6 w-6"
        />
      </div>
      <hr className="blush-separator" />

      <ChatHistory isActiveOnly={isActiveOnly} setIsActiveOnly={setIsActiveOnly} />
      <hr className="blush-separator" />
      <AddChat nav />
    </nav>
  );
}
