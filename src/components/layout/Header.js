import React, { useEffect } from "react";
import classes from "./Header.module.css";

const DUCK_QUACKS = [
  "Quack quack!",
  "Talk to me!",
  "Quack with me!",
  "Doo doo doo...",
  "Quackers not crackers",
  "Let's brainstorm!",
  "Spill it...",
  "Talking to yourself?",
  "Your newest best friend",
];

export default function Header() {
  function createTagline(lines) {
    return lines[Math.floor(Math.random() * lines.length)];
  }
  return (
    <header>
      <h1>MyDuck</h1>
      <div className={classes.tagline}>{createTagline(DUCK_QUACKS)}</div>
    </header>
  );
}
