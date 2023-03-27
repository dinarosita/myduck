import React, { useContext, useEffect, useState } from "react";
import ChatCollectionContext from "../context/ChatCollectionContext";
// import classes from "./Header.module.css";

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
  //   const { mainChatId } = useContext(ChatCollectionContext);
  //   const [tagline, setTagline] = useState(""
  //   );

  //   useEffect(() => {
  //     setTagline(TAGLINES[Math.floor(Math.random() * TAGLINES.length)]);
  //     return () => {
  //       setTagline("");
  //     };
  //   }, [mainChatId]);

  return (
    <header>
      <h1 className="text-3xl font-bold text-orange-500 uppercase">MyDuck</h1>
      <div  className="text-l font-normal text-orange-500">{TAGLINES[9]}</div>
    </header>
  );
}
