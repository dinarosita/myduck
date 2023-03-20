import React from 'react'
import classes from "./ChatContent.module.css"

const DummyChat = ["the favourite thing, i don't understand why it's not just as simple as a dd a property in the database object.", "favorite boolean", "then all pages can access it. favourite page merely displaying true ones. and count will be easy too"]

export default function ChatContent() {
  return (
    <div className={classes.chatContent}>
      {DummyChat.map (e => <div className={classes.chatEntry}>{e}</div>)}
    </div>
  )
}
