import React, { useContext } from "react";
import ChatListContext from "../../contexts/ChatListContext";

export default function ChatHistory() {
  const { chatList, mainChatId, setMainChatId } = useContext(ChatListContext);

  const chatStyle =
    "rounded-r-2xl  border  px-1 py-1 text-left text-base text-orange-500 hover:bg-orange-100 hover:text-orange-550 active:bg-orange-350 active:text-white";

  const mainStyle =
    " text-white bg-orange-350 border-orange-300 hover:bg-orange-350 hover:text-white font-bold";

  const regularStyle = " text-orange-550 border-1 border-orange-300";

  const selectClass = (id) =>
    chatStyle + (id === mainChatId ? mainStyle : regularStyle);

  return (
    <div className="flex flex-col justify-start gap-1">
      <h2 className="text-lg font-bold uppercase text-orange-500 ">My chats</h2>
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
