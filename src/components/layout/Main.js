import React, { useContext, useEffect, useState } from "react";
import AddMessage from "../chatWindow/AddMessage";
import ChatTitle from "../chatWindow/ChatTitle";
import { MainChatIdContext } from "./Content";
import MessageHistory from "../chatWindow/MessageHistory";

export const ChatMessagesContext = React.createContext();

export default function Main() {
  const mainChatId = useContext(MainChatIdContext);
  const [isLoading, setIsLoading] = useState(true);
  const [allMessages, setAllMessages] = useState([]);
  const [fetchTrigger, setFetchTrigger] = useState(false)
 
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
        setAllMessages(dataMessages);
      });
  }, [mainChatId, fetchTrigger]);

  function renderFetch () {
    setFetchTrigger(prev => !prev)
  }


  return (
    <ChatMessagesContext.Provider value={allMessages}>
      <main>
        <ChatTitle />
        <MessageHistory isLoading={isLoading} />
        <AddMessage renderFetch={renderFetch} />
      </main>
    </ChatMessagesContext.Provider>
  );
}
