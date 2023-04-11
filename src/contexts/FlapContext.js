import React, { useState } from "react";

const FlapContext = React.createContext();

export function FlapContextProvider(props) {
  const [flap, setFlap] = useState(false);
  return (
    <FlapContext.Provider value={{ flap, setFlap }}>
      {props.children}
    </FlapContext.Provider>
  );
}

export default FlapContext