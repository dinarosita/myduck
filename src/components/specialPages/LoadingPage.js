import React from 'react'
import Header from '../layout/Header';
import classes from "../layout/Content.module.css";
import WelcomeMessage from './WelcomeMessage';

export default function LoadingPage() {
  return (
    <body>
        <Header />
        <div className={classes.content}>
            <nav><h2>Loading chats...</h2></nav>
            <WelcomeMessage />
        </div>
    </body>
  )
}
