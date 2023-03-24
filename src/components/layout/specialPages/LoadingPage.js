import React from 'react'
import Header from '../Header';
import classes from "../Layout.module.css";
import WelcomeMain from './WelcomeMessage';

export default function LoadingPage() {
  return (
    <body>
        <Header />
        <div className={classes.mainbody}>
            <nav><h2>Loading chats...</h2></nav>
            <WelcomeMain />
        </div>
    </body>
  )
}
