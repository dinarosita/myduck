import React, { useContext, useRef, useState } from "react";
import {
  PencilSquareIcon,
  ArchiveBoxArrowDownIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import EditTitleMode from "./EditTitleMode";
import MenuWrapper from "../Common/MenuWrapper";
import ChatContext from "../../contexts/ChatContext";
import { useArchiveChat } from "../../hooks/useArchiveChat";
import { useReviveChat } from "../../hooks/useReviveChat";

import { useEditChatTitle } from "../../hooks/useEditChatTitle";

export default function ChatMenuWrapper({ title, children }) {
  const { chatCollection, mainId, isArchiveMode } = useContext(ChatContext);
  const [showEditMode, setShowEditMode] = useState(false);
  const inputRef = useRef();

  const { runArchiveChat } = useArchiveChat();
  const { runReviveChat } = useReviveChat();

  const { runEditChatTitle } = useEditChatTitle();

  function confirmEdit() {
    const newTitle = inputRef.current.value.trim().replace(/\s+/g, " ");
    if (newTitle !== "" || newTitle === title) {
      runEditChatTitle(chatCollection, mainId, newTitle);
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
          runReviveChat(chatCollection, mainId);
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
        confirmationFunction: () => runArchiveChat(chatCollection, mainId),
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
