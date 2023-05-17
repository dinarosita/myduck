import React, { useContext, useEffect, useState } from "react";
import NavigationActive from "./NavigationActive";
import AddChat from "../Navigation/AddChat";
import IconButton from "../Common/IconButton";
import { useNavButtonLogic } from "../../hooks/useNavButtonLogic";
import ChatContext from "../../contexts/ChatContext";
import NavigationArchive from "./NavigationArchive";

export default function Navigation() {
  const { chatList, isPageLoading, isNewUser } = useContext(ChatContext);
  const { handleNavClose } = useNavButtonLogic();
  const [isArchiveMode, setIsArchiveMode] = useState(false);
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
            isPageLoading && "text-opacity-40"
          }`}
        >
          {isArchiveMode ? "Archive Mode" : "Chat history"}
        </div>
        <IconButton
          onClick={handleNavClose}
          task="navClose"
          addButtonClass="lg:hidden h-6 w-6"
        />
      </div>
      <hr className="blush-separator" />

      {isAnyActive && !isArchiveMode && (
        <div className="items-left pass-overflow flex w-full flex-col justify-between gap-2 p-2 text-petal">
          <NavigationActive
            isArchiveMode={isArchiveMode}
            setIsArchiveMode={setIsArchiveMode}
          />{" "}
        </div>
      )}
      {isAnyArchive && (
        <>
          <hr className="thin-separator" />
          <NavigationArchive
            isArchiveMode={isArchiveMode}
            setIsArchiveMode={setIsArchiveMode}
          />
        </>
      )}

      {/* {!isAnyActive && !isAnyArchive && (
        <div className="items-left pass-overflow flex w-full flex-col gap-2 p-2 text-petal">
          <p>New here? </p>
          <p>Start your first chat.</p>
        </div>
      )}
      {!isAnyActive && isAnyArchive && (
        <div className="items-left pass-overflow flex w-full flex-col gap-2 p-2 text-petal">
          <p>Your chats are all archived.</p>
          <p>Either revive some or create a new one.</p>
        </div>
      )}


      {isAnyArchive && (
        <>
          <hr className="thin-separator" />
          <NavigationArchive
            isArchiveMode={isArchiveMode}
            setIsArchiveMode={setIsArchiveMode}
          />
        </>
      )} */}
      <hr className="blush-separator" />

      <AddChat nav />
    </nav>
  );
}
