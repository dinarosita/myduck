import React from "react";
import classes from "./ChatEntry.module.css";

export default function ChatEntry() {
  return (
    <div className={classes.chatEntry}>
      <form>
        <label for="entry">Add new message</label>
        <textarea id="entry" />
        <button>Submit</button>
      </form>
    </div>
  );
}
