import React from "react";
import classes from "./AddMessage.module.css";

export default function AddMessage() {
  return (
    <form className={classes.addMessage}>
      <label for="entry">Add new message</label>
      <textarea id="entry" />
      <button>Submit</button>
    </form>
  );
}
