import React, { useContext } from "react";
import ChatListContext from "../../contexts/ChatListContext";
import { useHistory } from "react-router-dom";

export default function ChatList() {
  const history = useHistory();
  const { chatList, mainChatId, setMainChatId } = useContext(ChatListContext);

  return (
    <div className="items-left flex w-full flex-col gap-3 overflow-auto">
      <p className="title pl-1">Chats</p>
      <ul className="flex flex-col items-start gap-1 leading-tight overflow-auto scrollnav  pr-4">
        {chatList
          .map((chat) => (
            <button
              key={chat.id}
              onClick={() => {
                setMainChatId(chat.id);
                history.replace("/myduck");
              }}
              className={`w-full rounded-r-full border-med p-sm pr-6
              pl-sm text-left transition-colors duration-100 hover:border-maincolor hover:text-textcolor focus:border-maincolor 
            focus:outline-none ring-0 ${
              mainChatId === chat.id
                ? "border-maincolor bg-white"
                : "border-transparent"
            }`}
            >
              {chat.title ? chat.title : "Untitled Quacks"}
            </button>
          ))
          .reverse()}
      </ul>
    </div>
  );
}
