import React, { useContext } from "react";
import ChatHistoryContext from "../../contexts/ChatHistoryContext";
import { useNavigate } from "react-router-dom";
import FlapContext from "../../contexts/FlapContext";
import { useWindowSize } from "../../hooks/useWindowSize";

export default function ChatHistory() {
  const navigate = useNavigate();
  const { ChatAvailable, chatList, mainChatId, updateMainChatId } =
    useContext(ChatHistoryContext);
    const {setIsFlapOpen} = useContext(FlapContext)
    const windowSize = useWindowSize()

  return (
    <div className="items-left pass-overflow flex w-full flex-col gap-2 p-2">
      <ul className="skyscroll flex flex-col items-start  overflow-y-auto pr-4 gap-1">
        {!ChatAvailable && (
          <button
            key="noChat"
            className={`pointer-events-none             
            
              w-full  rounded-r-full px-2   py-1    
              text-left text-petal/50 bg-vincent-950/10 
              
              `}
          >
            {"Enter your first chat"}
          </button>
          
        )}

        {chatList
          .map((chat) => (
            <button
              key={chat.id}
              onClick={() => {
                updateMainChatId(chat.id);
                if (windowSize.width < 480) {
                    setIsFlapOpen(false)
                }
                navigate("/myduck");          
              }}
              className={`${(mainChatId === chat.id) && "bg-vincent-950/20 "}
              w-full  rounded-r-full px-2   py-1    
              text-left text-petal ring-0 transition smooth hover:bg-petal/20 focus:bg-vincent-950/20 active:bg-none `}
            >
              {chat.title ? chat.title : "Untitled"}
            </button>
          ))
          .reverse()}
      </ul>
    </div>
  );
}
