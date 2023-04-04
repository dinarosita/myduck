import React, { useContext } from "react";
import ChatListContext from "../../contexts/ChatListContext";

export default function ChatHistory() {
  const { chatList, mainChatId, setMainChatId } = useContext(ChatListContext);
  const basicStyle =
    "btn border-transparent text-sol-md    rounded-l-none text-left pl-1 hover:bg-white hover:text-sol-md hover:border-sol-m w-full";

  const mainChatStyle = "bg-sol-d";

  const regularChatStyle = "";

  //   const basicStyle =
  //     "rounded-r-full  font-bold  px-2 text-left  hover:bg-sol-50 hover:text-sol-600 active:bg-sol-300 active:text-white hover:border hover:border-sol-m";

  //   const mainChatStyle =
  //     "bg-sol-50 text-sol-600 border border-sol bg-sol-50 hover:border-2";

  //   const regularChatStyle = " border-sol text-sol-m";

  const selectClass = (id) =>
    basicStyle + (id === mainChatId ? mainChatStyle : regularChatStyle);

  return (
    <div className="flex flex-col justify-start gap-1 ">
      <h2>My chats</h2>
      <div className="flex flex-col gap-1 whitespace-normal flex-1 overflow-y-auto ">
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
