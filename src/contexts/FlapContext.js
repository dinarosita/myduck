import React, { useContext, useState } from "react";
import FocusContext from "./FocusContext"

const FlapContext = React.createContext();

export function FlapContextProvider({ children }) {
    const {chatFormRef} = useContext(FocusContext)
  const [isFlapOpen, setIsFlapOpen] = useState(false);

  function handleCloseFlap() {
    console.log("Handle Close Flap")
    chatFormRef.current.value = "";
    setIsFlapOpen(false);
  }

  const context = {
    isFlapOpen: isFlapOpen,
    setIsFlapOpen: setIsFlapOpen,
    handleCloseFlap: handleCloseFlap,
  };

  return (
    <FlapContext.Provider value={context}>{children}</FlapContext.Provider>
  );
}

export default FlapContext;
