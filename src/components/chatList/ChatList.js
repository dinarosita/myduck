import React from "react";
import classes from "./ChatList.module.css";

const MockTitle = [
  { title: "Why concat array" },
  { title:  "Favourite: why use context"},
];
export default function ChatList() {
  return (
    <div className={classes.chatList}>
      <h2>Chat topics</h2>
      <div>
        <ul>
          {MockTitle.map((e, i) => {
            if (i === 1) {
              return <li className={classes.activeChat}>{e.title}</li>;
            } else {
              return <li>{e.title}</li>;
            }
          })}
        </ul>
      </div>
    </div>
  );
}
