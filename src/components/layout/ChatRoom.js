import React from 'react'
import classes from "./ChatRoom.module.css"
import ChatTitle from "../chatpage/ChatTitle"
import ChatContent from "../chatpage/ChatContent"
import ChatEntry from "../chatpage/ChatEntry"

export default function ChatRoom() {
  return (
    <div className={classes.chatRoom}>
        <ChatTitle />
        <ChatContent />
        <ChatEntry />
    </div>
  )
}
