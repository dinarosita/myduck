import React, { useContext, useRef, useState } from "react";
import {
  PencilSquareIcon,
  ArchiveBoxArrowDownIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import EditTitleMode from "./EditTitleMode";
import MenuWrapper from "../Common/MenuWrapper";
import ChatContext from "../../contexts/ChatContext";
import { useArchiveReviveChat } from "../../hooks/useArchiveReviveChat";
import { useEditChatTitle } from "../../hooks/useEditChatTitle";

export default function ChatMenuWrapper({ title, children }) {
  const { chatArray, mainId, isArchiveMode } = useContext(ChatContext);
  const [showEditMode, setShowEditMode] = useState(false);
  const inputRef = useRef();

  const { runArchiveChat } = useArchiveReviveChat();
  const { runEditChatTitle } = useEditChatTitle();

  function confirmEdit() {
    const newTitle = inputRef.current.value.trim().replace(/\s+/g, " ");
    if (newTitle !== "" || newTitle === title) {
      runEditChatTitle(chatArray, mainId, newTitle);
    }
    setShowEditMode(false);
  }

  let menuItems;

  if (isArchiveMode) {
    menuItems = [
      {
        type: "revive",
        icon: ArrowUpTrayIcon,
        actionLayout: () => null,
        confirmationFunction: () => {
          runArchiveChat(chatArray, mainId, false);
        },
      },
    ];
  } else {
    menuItems = [
      {
        type: "edit",
        icon: PencilSquareIcon,
        actionLayout: () => setShowEditMode(true),
        confirmationFunction: null,
      },
      {
        type: "archive",
        icon: ArchiveBoxArrowDownIcon,
        actionLayout: null,
        confirmationFunction: () => runArchiveChat(chatArray, mainId, true),
      },
    ];
  }

  return (
    <MenuWrapper
      menuItems={menuItems}
      showEditMode={showEditMode}
      className="chat-menu"
    >
      {showEditMode ? (
        <EditTitleMode
          inputRef={inputRef}
          title={title}
          confirmEdit={confirmEdit}
          setShowEditMode={setShowEditMode}
        />
      ) : (
        <>{children}</>
      )}
    </MenuWrapper>
  );
}
