import React, { useContext, useEffect, useState } from "react";
import ChatCollectionContext from "../context/ChatCollectionContext"
import classes from "./Header.module.css";


const TAGLINES = [
  "Quack quack!",
  "Talk to me!",
  "Quack with me!",
  "Doo doo doo...",
  "Quackers not crackers",
  "Let's brainstorm!",
  "Spill it...",
  "Talking to yourself?",
  "Your newest best friend",
  "The quick Queen of Quincy and her quacking quackeroo",
];

export default function Header(props) {
  const { mainChatId } = useContext(ChatCollectionContext);
  const [tagline, setTagline] = useState(
    "The quick Queen of Quincy and her quacking quackeroo"
  );

  useEffect(() => {
    setTagline(TAGLINES[Math.floor(Math.random() * TAGLINES.length)]);
    return () => {
      setTagline(null);
    };
  }, [mainChatId]);

  return (
    <header>
      <h1>{props.text ? props.text : "MyDuck"}</h1>
      <div className={classes.tagline}>{tagline}</div>
    </header>
  );
}