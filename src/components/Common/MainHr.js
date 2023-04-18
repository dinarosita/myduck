import React from "react";

export default function MainHr({ screen, addClass }) {
  return (
    <hr
      className={` border-0 border-x-0 h-0.5 bg-gradient-to-r from-sprig-300 to-almond-400 border-b-0 ${
        screen && "absolute left-0 w-screen"
      } ${addClass}`}
    />
  );
}
