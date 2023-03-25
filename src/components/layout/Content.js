import React, { useState } from "react";
import Navigation from "./Navigation";
import Main from "./Main";
import classes from "./Content.module.css";
import WelcomeMessage from "../specialPages/WelcomeMessage";

export const MainChatIdContext = React.createContext();

export default function Content(props) {
  const [mainChatId, setMainChatId] = useState(props.latestId);

  return (
    <MainChatIdContext.Provider value={{ mainChatId, setMainChatId }}>
      <section className={classes.content}>
        <Navigation />
        {mainChatId ? <Main /> : <WelcomeMessage />}
      </section>
    </MainChatIdContext.Provider>
  );
}
