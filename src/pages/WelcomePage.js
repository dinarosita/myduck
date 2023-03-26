import React from 'react'
import Header from '../layout/Header';
import Navigation from '../layout/Navigation';
import classes from "./ChatPage.module.css"

export default function WelcomePage() {
  return (
    <div className={classes.page}>
      <Header text="Welcome to MyDuck" />
      <Navigation />
    </div>
  )
}
