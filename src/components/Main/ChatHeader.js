import React, { useContext, useEffect, useState } from "react";
import ChatIndexContext from "../../contexts/ChatIndexContext";
// import IconButton from "../Common/IconButton";
import ChatTitle from "./ChatTitle";
import { DATABASE_URL } from "../../config";

export default function ChatHeader() {
  const { isPageLoading, isNewUser, chatList, setChatList, mainChatId, updateMainChatId, findLastActiveId } =
    useContext(ChatIndexContext);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp.seconds * 1000).toDateString();
    return `${date}`;
  }

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
    updateChatTitleInDatabase(mainChatId, newTitle)
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
    updateMainChatId(findLastActiveId(newList))
    archiveChatInDatabase(mainChatId)
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
    <header
      className={`blush-header relative min-h-16 px-8 ${
        (isPageLoading || (!isNewUser && !mainChatId)) && "text-opacity-30"
      }`}
    >
      <div className="flex flex-row justify-center gap-2">
        <ChatTitle title={title} onTitleChange={onTitleChange} onChatArchive={onChatArchive} />
      </div>
      <div className="flex flex-row justify-center gap-2">
        <div className="tagline">{tag}</div>
      </div>
    </header>
  );
}
