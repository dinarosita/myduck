import React from "react";

const GlobalConfigContext = React.createContext();

export function GlobalConfigContextProvider({ children }) {
  const myduckUrl = "https://myduck-fb785-default-rtdb.firebaseio.com/";

  const dataMode = {
    chats: "chats",
    mock: "mock",
  };

  const context = {
    databaseUrl: `${myduckUrl}${dataMode.mock}`,
  };
  return (
    <GlobalConfigContext.Provider value={context}>
      {children}
    </GlobalConfigContext.Provider>
  );
}
export default GlobalConfigContext