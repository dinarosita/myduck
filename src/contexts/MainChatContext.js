import { createContext, useContext, useEffect, useState } from "react";
import ChatIndexContext from "./ChatIndexContext";
import { DATABASE_URL } from "../config";

const MainChatContext = createContext({
  isMessageLoading: false,
  messageList: [],
  setMessageList: () => {},
});

export function MainChatContextProvider(props) {
  const { mainChatMeta } = useContext(ChatIndexContext);
  const [isMessageLoading, setIsMessageLoading] = useState(false);
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (!mainChatMeta.id) {
      return
    }
    setIsMessageLoading(true);
    const abortController = new AbortController();

    fetch(`${DATABASE_URL}/messages/${mainChatMeta.id}.json`, {
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
  }, [mainChatMeta.id]);

  const context = {
    isMessageLoading,
    messageList,
    setMessageList,
  };
  return (
    <MainChatContext.Provider value={context}>
      {props.children}
    </MainChatContext.Provider>
  );
}

export default MainChatContext;
