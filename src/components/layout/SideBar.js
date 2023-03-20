import React, { useContext } from "react";
import classes from "./SideBar.module.css";

const MockTitle = [
  { title: "Favourite: why use context" },
  { title: "Why concat array" },
];

export default function SideBar() {
  return (
    <div className={classes.sideBar}>
      <h2>Chats</h2>
      <div className={classes.sideNav}>
        <ul>
          {MockTitle.map((e) => (
            <li>{e.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
