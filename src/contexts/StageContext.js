import { createContext, useContext, useEffect, useState } from "react";
import ChatContext from "./ChatContext";
import { DATABASE_URL } from "../config";

const StageContext = createContext({

});

export function StageContextProvider(props) {




  const context = {

  };

  return (
    <StageContext.Provider value={context}>
      {props.children}
    </StageContext.Provider>
  );
}

export default StageContext;
