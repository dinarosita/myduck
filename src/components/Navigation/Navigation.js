import React, { useContext, useEffect, useState } from "react";
import NavigationActive from "./NavigationActive";
import AddChat from "../Navigation/AddChat";
import IconButton from "../Common/IconButton";
import { useNavButtonLogic } from "../../hooks/useNavButtonLogic";
import StageContext from "../../contexts/StageContext";
import ChatContext from "../../contexts/ChatContext";
import NavigationArchive from "./NavigationArchive";

export default function Navigation() {
  const { chatList } = useContext(ChatContext);
  const { isPageLoading, isNewUser } = useContext(StageContext);
  const { handleNavClose } = useNavButtonLogic();
  const [isActiveOnly, setIsActiveOnly] = useState(true);
  const [isAnyActive, setIsAnyActive] = useState(true);
  const [isAnyArchive, setIsAnyArchive] = useState(false);

  useEffect(() => {
    setIsAnyActive(chatList.some((chat) => chat.archived === false));
    setIsAnyArchive(chatList.some((chat) => chat.archived === true));
  }, [chatList]);

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
      {isAnyActive && (
        <NavigationActive
          isActiveOnly={isActiveOnly}
          setIsActiveOnly={setIsActiveOnly}
        />
      )}

      {isAnyArchive && (
        <>
          <hr className="thin-separator" />
          <NavigationArchive />
        </>
      )}
      <hr className="blush-separator" />

      <AddChat nav />
    </nav>
  );
}
