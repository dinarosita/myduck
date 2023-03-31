import React, { useContext } from "react";
import ChatListContext from "../../contexts/ChatListContext";

export default function ChatHistory() {
  const { chatList, mainChatId, setMainChatId } = useContext(ChatListContext);

  const chatStyle =
    "rounded-r-full  font-bold  px-2 text-left  hover:bg-gold-50 hover:text-gold-600 active:bg-gold-300 active:text-white hover:border hover:border-gold-m";

  const mainStyle =
    "bg-gold-50 text-gold-600 border border-gold-m bg-gold-50 hover:border-2";

  const regularStyle = " border-gold-m text-gold-m";

  const selectClass = (id) =>
    chatStyle + (id === mainChatId ? mainStyle : regularStyle);

  return (
    <div className="flex flex-col justify-start gap-1">
      <h2>My chats</h2>
      <div className="flex flex-col gap-1 whitespace-normal">
        {chatList
          .map((chat) => (
            <button
              key={chat.id}
              onClick={() => setMainChatId(chat.id)}
              className={selectClass(chat.id)}
            >
              {chat.title ? chat.title : "Untitled Quacks"}
            </button>
          ))
          .reverse()}
      </div>
    </div>
  );
}
