import React, { useContext } from "react";
import FlapContext from "../../contexts/FlapContext";
import ChatIndexContext from "../../contexts/ChatIndexContext";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import ArchivedChats from "./ArchivedChats";

export default function ChatHistory({ isActiveOnly, setIsActiveOnly }) {
  const navigate = useNavigate();
  const windowSize = useWindowSize();
  const { setIsFlapOpen } = useContext(FlapContext);
  const { isPageLoading, isNewUser, chatList, mainChatId, updateMainChatId } =
    useContext(ChatIndexContext);

  return (
    <div className="items-left pass-overflow flex w-full flex-col gap-2 p-2">
      <ul className="skyscroll flex flex-col items-start  gap-1 overflow-y-auto pr-4">
        {isPageLoading || isNewUser ? (
          <li key={isPageLoading ? "id-loading" : "id-newUser"}>
            <button
              className={`chat-button pointer-events-none bg-vincent-950/20 opacity-50`}
              aria-label={isPageLoading ? "Loading chats" : "Welcome message"}
            >
              {isPageLoading ? "Loading..." : "Hello Duckies!"}
            </button>
          </li>
        ) : (
          chatList
            .filter((chat) => (isActiveOnly ? !chat.archived : true))
            .map((chat) => (
              <li key={chat.id}>
                <button
                  onClick={() => {
                    updateMainChatId(chat.id);
                    if (windowSize.width < 480) {
                      setIsFlapOpen(false);
                    }
                    navigate("/myduck");
                  }}
                  className={`chat-button smooth break-words transition hover:bg-petal/20 focus:bg-vincent-950/20 active:bg-none ${
                    mainChatId === chat.id && "bg-vincent-950/20"
                  } ${chat.archived === true && "text-opacity-50"}
                            
                            `}
                  aria-label={`Open chat: ${chat.title || "Untitled chat"}`}
                >
                  {chat.title || "Untitled chat"}
                </button>
              </li>
            ))
            .reverse()
            
        )}
        <ArchivedChats />
      </ul>
    </div>
  );
}
