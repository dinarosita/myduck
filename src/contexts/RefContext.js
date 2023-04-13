// RefContext.js

import { createContext, useRef } from "react";

const RefContext = createContext(null);

export function RefContextProvider({ children }) {
  const addMessageRef = useRef();
  const addChatRef = useRef();
  const refs = {
    addMessageRef: addMessageRef,
    addChatRef: addChatRef,
  };
  return <RefContext.Provider value={refs}>{children}</RefContext.Provider>;
}

export default RefContext;
