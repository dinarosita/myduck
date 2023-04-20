import React, { useState } from "react";

const GlobalConfigContext = React.createContext();

export function GlobalConfigContextProvider({ children }) {
    
    const [mode, setMode] = useState(localStorage.getItem("myduckMode"));
    const databaseUrl = `https://myduck-fb785-default-rtdb.firebaseio.com/${mode ? mode : "chats"}`
    

      function toggleMode() {
        const newMode = (!mode || mode === "chats") ? "mock" : "chats";
        setMode(newMode);
        localStorage.setItem("myduckMode", newMode);
        window.location.reload();
      }

    const context = {
        mode: mode,
        databaseUrl: databaseUrl,
        toggleMode: toggleMode,
    }
 
  return (
    <GlobalConfigContext.Provider value={context}>
      {children}
    </GlobalConfigContext.Provider>
  );
}
export default GlobalConfigContext