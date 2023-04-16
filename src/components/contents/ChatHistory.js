import React, { useContext } from "react";
import ChatHistoryContext from "../../contexts/ChatHistoryContext";
import { useNavigate } from "react-router-dom";
import FlapContext from "../../contexts/FlapContext";
import FocusContext from "../../contexts/FocusContext";

export default function ChatHistory() {
  const { msgFormRef, focus } = useContext(FocusContext);
  const { setIsFlapOpen  } = useContext(FlapContext);
  const navigate = useNavigate();
  const { ChatAvailable, chatList, mainChatId, updateMainChatId } =
    useContext(ChatHistoryContext);

  return (
    <div className="items-left flex w-full flex-col gap-2 overflow-auto pb-4 pt-6">
      <p className="title text-center text-lg">Chat History</p>
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
                setIsFlapOpen(false);
                focus(msgFormRef);
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
