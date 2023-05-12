import React, { useContext, useRef, useState } from "react";
import EditTitleMode from "./EditTitleMode";
import MenuWrapper from "../Common/MenuWrapper";
import {
  PencilSquareIcon,
  ArchiveBoxArrowDownIcon,
} from "@heroicons/react/24/outline";
import ChatContext from "../../contexts/ChatContext";
import { useArchiveChat } from "../../hooks/useArchiveChat";
import { useEditChatTitle } from "../../hooks/useEditChatTitle";

export default function ChatMenuWrapper({ title, children }) {
  const { chatList, mainChatId } = useContext(ChatContext);
  const [showEditMode, setShowEditMode] = useState(false);
  const { runArchiveChat } = useArchiveChat();
  const { runEditChatTitle } = useEditChatTitle();
  const inputRef = useRef();

  const menuItems = [
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
      confirmationFunction: () => runArchiveChat(chatList, mainChatId),
    },
  ];

  function confirmEdit() {
    const newTitle = inputRef.current.value.trim().replace(/\s+/g, " ");
    if (newTitle !== "" || newTitle === title) {
      runEditChatTitle(chatList, mainChatId, newTitle);
    }
    setShowEditMode(false);
  }

  return (
    <MenuWrapper
      menuItems={menuItems}
      showEditMode={showEditMode}
      contextClass="chat-menu"
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
