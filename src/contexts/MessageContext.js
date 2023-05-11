import { createContext, useContext, useEffect, useState } from "react";
import ChatContext from "./ChatContext";
import { DATABASE_URL } from "../config";

const MessageContext = createContext({
  isMessageLoading: false,
  messageList: [],
  setMessageList: () => {},
});

export function MessageContextProvider(props) {
  const { mainChatId } = useContext(ChatContext);
  const [isMessageLoading, setIsMessageLoading] = useState(false);
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (!mainChatId) {
      return
    }
    setIsMessageLoading(true);
    const abortController = new AbortController();

    fetch(`${DATABASE_URL}/messages/${mainChatId}.json`, {
      signal: abortController.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Message list response not ok");
        }
        return response.json();
      })
      .then((data) => {
        const messages = [];
        for (const key in data) {
          const message = {
            id: key,
            ...data[key],
          };
          messages.push(message);
        }
        setMessageList(messages);
        setIsMessageLoading(false);
      })
      .catch((error) => {
        console.log("marker")
        console.log(error);
        setIsMessageLoading(false);
      });
      return (() => {abortController.abort()})
  }, [mainChatId]);

  const context = {
    isMessageLoading,
    messageList,
    setMessageList,
  };
  return (
    <MessageContext.Provider value={context}>
      {props.children}
    </MessageContext.Provider>
  );
}

export default MessageContext;
