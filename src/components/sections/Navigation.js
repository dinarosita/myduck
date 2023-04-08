import React, { useContext } from "react";
import ChatListContext from "../../contexts/ChatListContext";
import { useHistory } from "react-router-dom";

export default function ChatNavigation() {
    const history = useHistory()
  const { chatList, mainChatId, setMainChatId } = useContext(ChatListContext);
  const basicStyle =
    "btn border-transparent font-normal text-sol-950  rounded-l-none text-left pl-0 hover:bg-white hover:text-sol-800 hover:border-sol w-full";

  const mainChatStyle = "bg-sol-800";

  const regularChatStyle = "";

  //   const basicStyle =
  //     "rounded-r-full  font-bold  px-2 text-left  hover:bg-sol-50 hover:text-sol-600 active:bg-sol-300 active:text-white hover:border hover:border-sol-500";

  //   const mainChatStyle =
  //     "bg-sol-50 text-sol-600 border border-sol bg-sol-50 hover:border-2";

  //   const regularChatStyle = " border-sol text-sol-500";

  const selectClass = (id) =>
    basicStyle + (id === mainChatId ? mainChatStyle : regularChatStyle);

  return (

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto scrollnav whitespace-normal p-1">
        {chatList
          .map((chat) => (
            <button
              key={chat.id}
              onClick={() => {
                setMainChatId(chat.id);
                history.replace("/myduck");
              }}
              className={selectClass(chat.id)}
            >
              {chat.title ? chat.title : "Untitled Quacks"}
            </button>
          ))
          .reverse()}
      </nav>

  );
}
