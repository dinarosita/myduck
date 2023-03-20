import React from "react";
import ChatRoom from "./ChatRoom";
import classes from "./Layout.module.css";
import SideBar from "./SideBar";

import TopBar from "./TopBar";

export default function Layout() {
  return (
    <body className={classes.body}>
      <TopBar />
      <div className={classes.bodyBulk}>
        <SideBar />
        <ChatRoom />
      </div>
    </body>
  );
}
