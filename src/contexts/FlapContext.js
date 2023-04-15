import React, { useState } from "react";

const FlapContext = React.createContext();

export function FlapContextProvider({ children }) {
  const [flapOpen, setFlapOpen] = useState(false);

  return (
    <FlapContext.Provider value={{ flapOpen, setFlapOpen }}>
      {children}
    </FlapContext.Provider>
  );
}

export default FlapContext;
