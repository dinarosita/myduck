import React, { useContext } from 'react'
import classes from "./ChatPage.module.css"
import Header from "../layout/Header"
import Navigation from "../layout/Navigation"
import Main from "../layout/Main"
import ChatCollectionContext from '../context/ChatCollectionContext'

export default function ChatPage() {

    const { isLoading } = useContext(ChatCollectionContext);

    if (isLoading) return     <div className={classes.page}>
    <Header />
  </div>;

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
