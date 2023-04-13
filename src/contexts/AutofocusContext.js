// AutofocusContext.js

import { createContext, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

const AutofocusContext = createContext(null);

export function AutofocusContextProvider({ children }) {
    const [autofocusAllowed, setAutofocusAllowed] = useState(localStorage.getItem("autofocusAllowed") || false)
    const msgFormRef = useRef();
  const chatFormRef = useRef();
  const { width } = useWindowSize();
  const isLargeScreen = width >= 1024;


  function toggleAutofocus() {
    setAutofocusAllowed(!autofocusAllowed);
    localStorage.setItem("autofocusAllowed", autofocusAllowed);
  }

  function autofocus(ref){
    if (isLargeScreen || autofocusAllowed) {
        ref.current.focus()
    }
  }

  const context = {
    msgFormRef: msgFormRef,
    chatFormRef: chatFormRef,
    autofocus: autofocus,
    toggleAutofocus: toggleAutofocus,
  };  
  
  return <AutofocusContext.Provider value={context}>{children}</AutofocusContext.Provider>;
}

export default AutofocusContext;
