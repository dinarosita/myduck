import React from 'react'
import classes from "./ChatPage.module.css"
import Header from "../layout/Header"
import Navigation from "../layout/Navigation"
import Main from "../layout/Main"

export default function ChatPage() {
  return (
    <div className={classes.page}>
      <Header />
      <div className={classes.content}>
        <Navigation />
        <Main />
      </div>
    </div>
  )
}
