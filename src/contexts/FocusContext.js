import { createContext, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

const FocusContext = createContext(null);

export function FocusContextProvider({ children }) {
  const [focusText, setFocusText] = useState("");
  const [focusAllowed, setFocusAllowed] = useState(
    localStorage.getItem("focusAllowed") || false
  );
  const msgFormRef = useRef();
  const chatFormRef = useRef();
  const { width } = useWindowSize();
  const isLargeScreen = width >= 1024;

  function toggleFocus() {
    setFocusAllowed((prevFocusAllowed) => {
      const newFocusAllowed = !prevFocusAllowed;
      localStorage.setItem("focusAllowed", newFocusAllowed);
      setFocusText(newFocusAllowed ? "on" : "off");
      console.log("Focus ", newFocusAllowed ? "on" : "off");
      return newFocusAllowed;
    });
  }

  function focus(ref) {
    if (isLargeScreen || focusAllowed) {
      if (ref && ref.current) {
        ref.current.focus();
      }
    }
  }

  const context = {
    msgFormRef: msgFormRef,
    chatFormRef: chatFormRef,
    focus: focus,
    toggleFocus: toggleFocus,
    focusText: focusText,
  };

  return (
    <FocusContext.Provider value={context}>{children}</FocusContext.Provider>
  );
}

export default FocusContext;
