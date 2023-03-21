import React, { useState } from "react";
import classes from "./AddChat.module.css";

export default function AddChat() {
  const [isButton, setIsButton] = useState(true);
  function showBox() {
    setIsButton(prev => !prev)
  }
  return (
    <div className={classes.addChat}>
      <h3>New topic?</h3>
      {isButton 
        ? <button onClick={showBox}>Button</button> 
        : <form>
            <label>Enter chat title:</label>
            <input type="text" />
            <div className={classes.buttons}><button>Cancel</button>
            <button>Submit</button></div>
        </form>
      } 
    </div>
  );
}
