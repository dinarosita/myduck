import React from 'react'
import Header from '../layout/Header';
import classes from "./ChatPage.module.css"

export default function LoadingPage() {
  return (
    <div className={classes.page}>
      <Header text="MyDuck is loading..."></Header>
    </div>
  )
}
