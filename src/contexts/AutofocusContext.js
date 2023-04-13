// AutofocusContext.js

import { createContext, useRef } from "react";
import useWindowSize from "../hooks/useWindowSize";

const AutofocusContext = createContext(null);

export function AutofocusContextProvider({ children }) {
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
  
  return <AutofocusContext.Provider value={context}>{children}</AutofocusContext.Provider>;
}

export default AutofocusContext;
