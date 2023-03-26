import React from 'react'
import Header from '../layout/Header';
import MainLoading from '../layout/MainLoading';
import Navigation from "../layout/Navigation"
// import classes from "./ChatPage.module.css"

export default function LoadingPage() {
  return (
    <div>
      <Header />
      <div>
        <Navigation />
        <MainLoading />
      </div>
    </div>
  )
}
