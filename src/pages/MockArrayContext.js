import React, { createContext, useState } from "react";

export const MockArrayContext = createContext({ MockArray: [] });

export default function MockArrayContextProvider(props) {
  const [mockArray, setMockArray] = useState([
    // { name: "Anna" },
    // { name: "Berlin" },
  ]);

  const context = {
    mockArray,
    setMockArray,
  };

  return (
    <MockArrayContext.Provider value={context}>
      {props.children}
    </MockArrayContext.Provider>
  );
}
