import { createContext, useState } from "react";

const ChatContext = createContext({
  chatList: [],
  setChatList: () => {},
  mainChatId: null,
  setMainChatId: () => {},
  updateMainChatId: () => {},
  findLastActiveId: () => {},
});

export function ChatContextProvider(props) {
  const [chatList, setChatList] = useState([]);
  const [mainChatId, setMainChatId] = useState(null);

  function findLastActiveId(chats) {
    for (let i = chats.length - 1; i >= 0; i--) {
      if (chats[i].archived === false) {
        return chats[i].id;
      }
    }
    return null
  }

  function updateMainChatId(newId) {
    setMainChatId(newId);
    localStorage.setItem("storageChatId", newId);
  }

  const context = {
    chatList,
    setChatList,
    mainChatId,
    setMainChatId,
    updateMainChatId,
    findLastActiveId,
  };

  return (
    <ChatContext.Provider value={context}>
      {props.children}
    </ChatContext.Provider>
  );
}

export default ChatContext;
