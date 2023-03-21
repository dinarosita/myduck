import React from "react";
import classes from "./Layout.module.css";
import Navigation from "./Navigation";

import Header from "./Header";
import ChatWindow from "./ChatWindow";

export default function Layout() {
  return (
    <body>
      <Header />
      <div className={classes.bodyBulk}>
        <Navigation />
        <ChatWindow />
      </div>
    </body>
  );
}
