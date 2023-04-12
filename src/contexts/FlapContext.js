import React, { useState } from "react";

const FlapContext = React.createContext();

export function FlapContextProvider(props) {
  const [flapOpen, setFlapOpen] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <FlapContext.Provider value={{ flapOpen, setFlapOpen, overlayVisible, setOverlayVisible }}>
      {props.children}
    </FlapContext.Provider>
  );
}

export default FlapContext;
