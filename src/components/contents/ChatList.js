import React, { useContext } from "react";
import ChatListContext from "../../contexts/ChatListContext";
import { useHistory } from "react-router-dom";

export default function ChatList() {
  const history = useHistory();
  const { chatList, mainChatId, setMainChatId } = useContext(ChatListContext);

  return (
    <div className="items-left flex w-full flex-col gap-3 pr-4 overflow-auto">
      <p className="title pl-1 text-lg">Chats</p>
      <ul className="flex flex-col items-start gap-0.5 leading-tight overflow-auto scrollnav border-main border-x-0 pr-4">
        {chatList
          .map((chat) => (
            <button
              key={chat.id}
              onClick={() => {
                setMainChatId(chat.id);
                history.replace("/myduck");
              }}
              className={`w-full rounded-r-full border py-0.5 px-2 text-left transition hover:border-hovercolor hover:text-textcolor focus:border-maincolor transi
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
