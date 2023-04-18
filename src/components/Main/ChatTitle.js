import React, { useContext, useEffect, useState } from "react";
import MainChatContext from "../../contexts/MainChatContext";

export default function ChatTitle() {
  const { id, chatMeta } = useContext(MainChatContext);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp.seconds * 1000).toDateString();
    const time = new Date(timestamp.seconds * 1000).toLocaleTimeString();
    return `${date} at ${time}`;
  }

  useEffect(() => {
    if (!id) {
      setTitle("Welcome to MyDuck");
      setTag("Start a new chat...");
    } else {
      if (!chatMeta || !chatMeta.title) {
        setTitle("Untitled Quacks");
      } else {
        setTitle(chatMeta.title);
      }
      if (chatMeta && chatMeta.createdAt) {
        setTag(`Created: ${formatTimestamp(chatMeta.createdAt)}`);
      } else {
        setTag("");
      }
    }
  }, [id, chatMeta]);

  return (
    <header className="flex h-fit w-full flex-none flex-col items-center text-center text-almond-800 bg-blossom-50 pt-2 pb-3 ">
      <div className="flex flex-none flex-col items-center justify-center ">
        <h1 className="text-vincent-700 uppercase">{title}</h1>
        <p className="text-sm text-vincent-800">{tag}</p>
      </div>
    </header>
  );
}
