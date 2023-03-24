import React from 'react'
import classes from "./Messages.module.css"

const DummyChat = ["This is made using dummy data. Still under construction.", "the favourite thing, i don't understand why it's not just as simple as a dd a property in the database object.", "favorite boolean", "then all pages can access it. favourite page merely displaying true ones. and count will be easy too"]

export default function Messages() {
  return (
    <div className={classes.messages}>
      {DummyChat.map (e => <div className={classes.messageBubble}>{e}</div>)}
    </div>
  )
}
