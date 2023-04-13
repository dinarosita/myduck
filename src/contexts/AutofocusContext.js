// AutofocusContext.js

import { createContext, useRef } from "react";
import useWindowSize from "../hooks/useWindowSize";
import useVirtualKeyboard from "../hooks/useVirtualKeyboard";

const AutofocusContext = createContext(null);

export function AutofocusContextProvider({ children }) {
    const { isKeyboardVisible, handleFocus, handleBlur } = useVirtualKeyboard();
    const msgFormRef = useRef();
  const chatFormRef = useRef();
  const { width } = useWindowSize();
  const isLargeScreen = width >= 1024;

  function autofocus(ref){
    if (isLargeScreen || !isKeyboardVisible) {
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
