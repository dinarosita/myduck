import React, { useContext, useState } from "react";
import FocusContext from "./FocusContext"

const FlapContext = React.createContext();

export function FlapContextProvider({ children }) {
    const {chatFormRef} = useContext(FocusContext)
  const [flapOpen, setFlapOpen] = useState(false);

  function handleCloseFlap() {
    console.log("Handle Close Flap")
    chatFormRef.current.value = "";
    setFlapOpen(false);
  }

  const context = {
    flapOpen: flapOpen,
    setFlapOpen: setFlapOpen,
    handleCloseFlap: handleCloseFlap,
  };

  return (
    <FlapContext.Provider value={context}>{children}</FlapContext.Provider>
  );
}

export default FlapContext;
