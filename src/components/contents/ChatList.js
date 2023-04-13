import React, { useContext } from "react";
import ChatListContext from "../../contexts/ChatListContext";
import { useNavigate } from "react-router-dom";
import FlapContext from "../../contexts/FlapContext";
import AutofocusContext from "../../contexts/AutofocusContext";

export default function ChatList() {
  const {msgFormRef} = useContext(AutofocusContext);
  const { setFlapOpen, setOverlayVisible } = useContext(FlapContext);
  const navigate = useNavigate();
  const { ChatAvailable, chatList, mainChatId, updateMainChatId } =
    useContext(ChatListContext);

  return (
    <div className="items-left flex w-full flex-col gap-2 overflow-auto pb-4 pt-8">
      <p className="title text-center text-lg">Chat List</p>
      <ul className="scroll-cbox flex flex-col items-start gap-0.5 overflow-y-scroll border-y-4 border-l-4 border-cboxcolor pr-4 ">
        {!ChatAvailable && (
          <button
            key="noChat"
            className={`chat-item } pointer-events-none border-transparent bg-sol-25 
      text-sol-300`}
          >
            {"Waiting for your first chat"}
          </button>
        )}

        {chatList
          .map((chat) => (
            <button
              key={chat.id}
              onClick={() => {
                updateMainChatId(chat.id);
                navigate("/myduck");
                setFlapOpen(false);
                setOverlayVisible(false);
                msgFormRef.current.focus();
              }}
              className={`chat-item 
              transition hover:border-hovercolor hover:text-textcolor
            focus:border-hovercolor focus:text-textcolor focus:outline-none ${
              mainChatId === chat.id
                ? "border-cboxcolor bg-sol-50"
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
