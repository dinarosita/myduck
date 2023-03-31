import React from "react";
import { Link } from "react-router-dom";
import Button from "../../wrappers/Button";

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

export default function Header() {
  return (
    <header className="w-full border-b border-orange-400 p-1">
      <div className="flex flex-row items-baseline justify-between">
        <h1 className="text-3xl font-bold uppercase text-orange-500">
          <Link to="/myduck">MyDuck</Link>
        </h1>
        <nav className="flex flex-row gap-2">
          <Link to="/myduck/sleekduck" className="btn">
            <Button>SleekDuck</Button>
          </Link>
          <Button>
            <Link to="/myduck/tailwind">Tailwind</Link>
          </Button>
        </nav>
      </div>
      <p className="text-l font-normal text-orange-500">{TAGLINES[9]}</p>
    </header>
  );
}
