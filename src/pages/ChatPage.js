import React, { useContext } from 'react'
// import classes from "./ChatPage.module.css"
import Header from "../layout/Header"
import Navigation from "../layout/Navigation"
import Main from "../layout/Main"
import ChatCollectionContext from '../context/ChatCollectionContext'

export default function ChatPage() {

    const { isLoading } = useContext(ChatCollectionContext);

    if (isLoading) return <div>
    <Header />
  </div>;

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row">
        <Navigation />
        <Main />
      </div>
    </div>
  )
}