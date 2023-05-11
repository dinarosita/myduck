import React, { useContext, useRef, useState } from "react";
import EditTitleMode from "./EditTitleMode";
import { DATABASE_URL } from "../../config";
import MenuWrapper from "../Common/MenuWrapper";
import {
  PencilSquareIcon,
  ArchiveBoxArrowDownIcon,
} from "@heroicons/react/24/outline";
import ChatIndexContext from "../../contexts/ChatIndexContext";

export default function ChatTitleMenu({ title, onTitleChange }) {
  const {
    chatList,
    setChatList,
    mainChatId,
    updateMainChatId,
    findLastActiveId,
  } = useContext(ChatIndexContext);
  const [showEditMode, setShowEditMode] = useState(false);
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
      confirmationFunction: onChatArchive,
    },
  ];

  function confirmEdit() {
    const newTitle = inputRef.current.value.trim().replace(/\s+/g, " ");
    if (newTitle !== "" || newTitle === title) {
      onTitleChange(newTitle);
    }
    setShowEditMode(false);
  }

  function onTitleChange(newTitle) {
    const updatedChatList = chatList.map((chat) => {
      if (chat.id === mainChatId) {
        return {
          ...chat,
          title: newTitle,
        };
      }
      return chat;
    });
    setChatList(updatedChatList);
    updateChatTitleMenuInDatabase(mainChatId, newTitle);
  }

  function updateChatTitleMenuInDatabase(chatId, newTitle) {
    return fetch(`${DATABASE_URL}/chatMeta/${chatId}.json`, {
      method: "PATCH",
      body: JSON.stringify({ title: newTitle }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        console.log("Chat title updated in the database");
      })
      .catch((error) => {
        console.error("Error updating chat title:", error);
      });
  }

  function onChatArchive() {
    const newList = chatList.map((chat) => {
      if (chat.id === mainChatId) {
        return {
          ...chat,
          archived: true,
        };
      }
      return chat;
    });
    setChatList(newList);
    updateMainChatId(findLastActiveId(newList));
    archiveChatInDatabase(mainChatId);
  }

  function archiveChatInDatabase(chatId) {
    return fetch(`${DATABASE_URL}/chatMeta/${chatId}.json`, {
      method: "PATCH",
      body: JSON.stringify({ archived: true }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        console.log("Chat archived in the database");
      })
      .catch((error) => {
        console.error("Error archiving chat:", error);
      });
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
        <h1 tabIndex="0" className="min-h-7" style={{ lineHeight: "1.5rem" }}>
          {title || "Untitled Chat"}
        </h1>
      )}
    </MenuWrapper>
  );
}
