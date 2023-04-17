import React, { useState } from "react";

const FlapContext = React.createContext();

export function FlapContextProvider({ children }) {
  const [isFlapOpen, setIsFlapOpen] = useState(false);

  function handleCloseFlap() {
    console.log("Handle Close Flap")
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
