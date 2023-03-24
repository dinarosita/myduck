import React, { useState } from "react";
import Navigation from "./Navigation";
import Main from "./Main";
import classes from "./Content.module.css";
import WelcomeMessage from "../specialPages/WelcomeMessage";

export const MainChatIdContext = React.createContext();

export default function Content(props) {

  const [mainChatId, setMainChatId] = useState(props.latestId);


  function Callback(chatId) {
    return setMainChatId(chatId);
  }

  return (
    <MainChatIdContext.Provider value={mainChatId}>
      <section className={classes.content}>
        <Navigation handleCallback={Callback} requestFetch={props.requestFetch} />
        {mainChatId ? <Main /> : <WelcomeMessage />}
      </section>
    </MainChatIdContext.Provider>
  );
}
