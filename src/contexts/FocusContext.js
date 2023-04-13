// FocusContext.js

import { createContext, useRef } from "react";
import useWindowSize from "../hooks/useWindowSize";

const FocusContext = createContext(null);

export function FocusContextProvider({ children }) {
  const msgFormRef = useRef();
  const chatFormRef = useRef();
  const { width } = useWindowSize();
  const isLargeScreen = width >= 1024;

  function autofocus(ref){
    if (isLargeScreen) {
        ref.current.focus()
    }
  }

  const context = {
    msgFormRef: msgFormRef,
    chatFormRef: chatFormRef,
    autofocus: autofocus,
  };  
  
  return <FocusContext.Provider value={context}>{children}</FocusContext.Provider>;
}

export default FocusContext;
