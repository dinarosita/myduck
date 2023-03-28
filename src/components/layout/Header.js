import React  from "react";

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
      <h1 className="text-3xl font-bold text-orange-500 uppercase">MyDuck</h1>
      <div  className="text-l font-normal text-orange-500">{TAGLINES[9]}</div>
    </header>
  );
}
