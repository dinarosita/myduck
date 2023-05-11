import React, { useContext, useEffect, useState } from "react";
import ChatIndexContext from "../../contexts/ChatIndexContext";
import ChatTitle from "./ChatTitle";
import { DATABASE_URL } from "../../config";
import MenuWrapper from "../Common/MenuWrapper";
import {
  PencilSquareIcon,
  ArchiveBoxArrowDownIcon,
} from "@heroicons/react/24/outline";

export default function ChatHeader() {
  const {
    isPageLoading,
    isNewUser,
    chatList,
    setChatList,
    mainChatId,
    updateMainChatId,
    findLastActiveId,
  } = useContext(ChatIndexContext);

  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [showEditMode, setShowEditMode] = useState(false);

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

  useEffect(() => {
    if (isPageLoading) {
      setTitle("Loading Duck");
      setTag("Quack quack quack");
    } else {
      if (isNewUser) {
        setTitle("Welcome to MyDuck");
        setTag("Start a new chat!");
      } else {
        if (mainChatId) {
          const mainChat = chatList.find((chat) => chat.id === mainChatId);
          setTitle(mainChat.title ? mainChat.title : null);
          setTag(`Created: ${formatTimestamp(mainChat.createdAt)}`);
        }
      }
    }
  }, [isPageLoading, isNewUser, chatList, mainChatId]);

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp.seconds * 1000).toDateString();
    return `${date}`;
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
    updateChatTitleInDatabase(mainChatId, newTitle);
  }

  function updateChatTitleInDatabase(chatId, newTitle) {
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
    <MenuWrapper menuItems={menuItems} showEditMode={showEditMode} contextClass="chat-menu">
      <header
        tabIndex="0"
        className={`blush-header relative h-fit min-h-16 px-2 ${
          (isPageLoading || (!isNewUser && !mainChatId)) && "text-opacity-30"
        }`}
      >
        <div className="flex flex-row justify-center gap-2 px-6 ">
          <ChatTitle
            title={title}
            onTitleChange={onTitleChange}
            showEditMode={showEditMode}
            setShowEditMode={setShowEditMode}
          />
        </div>
        <div className="flex flex-row justify-center gap-2 px-6">
          <div className="tagline">{tag}</div>
        </div>
      </header>
    </MenuWrapper>
  );
}
