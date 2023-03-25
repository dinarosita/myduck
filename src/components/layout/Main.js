import React, { useContext, useEffect, useState } from "react";
import AddMessage from "../chatWindow/AddMessage";
import ChatTitle from "../chatWindow/ChatTitle";
import { MainChatIdContext } from "./Content";
import MessageHistory from "../chatWindow/MessageHistory";

export const ChatMessagesContext = React.createContext();

export default function Main() {
  const { mainChatId } = useContext(MainChatIdContext);
  const [isLoading, setIsLoading] = useState(true);
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://myduck-fb785-default-rtdb.firebaseio.com/chats/${mainChatId}/messages.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const dataMessages = [];
        for (const key in data) {
          const message = {
            id: key,
            ...data[key],
          };
          dataMessages.push(message);
        }
        setIsLoading(false);
        setChatMessages(dataMessages);
      });
  }, [mainChatId]);



  return (
    <ChatMessagesContext.Provider value={{ chatMessages, setChatMessages }}>
      <main>
        <ChatTitle />
        <MessageHistory isLoading={isLoading} />
        <AddMessage 
        />
      </main>
    </ChatMessagesContext.Provider>
  );
}
