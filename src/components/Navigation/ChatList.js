import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import FlapContext from "../../contexts/FlapContext";
import ChatContext from "../../contexts/ChatContext";

export default function ChatList() {
  const navigate = useNavigate();
  const windowSize = useWindowSize();
  const { setIsFlapOpen } = useContext(FlapContext);
  const {
    isArchiveMode,
    archivedChats,
    activeChats,
    mainId,
    updateMainId,
    setMainId,
  } = useContext(ChatContext);
  return (
    <ul className="skyscroll flex h-full flex-col  items-start gap-1 overflow-y-auto pr-4">
      {(isArchiveMode ? archivedChats : activeChats)
        .map((chat) => (
          <li key={chat.id}>
            <button
              onClick={() => {
                isArchiveMode ? setMainId(chat.id) : updateMainId(chat.id);
                if (windowSize.width < 480) {
                  setIsFlapOpen(false);
                }
                navigate("/myduck");
              }}
              className={`chat-button smooth break-words transition hover:bg-petal/20 focus:bg-vincent-950/20 active:bg-none ${
                mainId === chat.id && "bg-vincent-950/20"
              } ${isArchiveMode && "text-blossom-200"}
                            
                            `}
              aria-label={`Open chat: ${chat.title || "Untitled chat"}`}
            >
              {chat.title || "Untitled Chat"}
            </button>
          </li>
        ))
        .reverse()}
    </ul>
  );
}
