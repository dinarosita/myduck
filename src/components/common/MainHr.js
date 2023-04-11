import React from "react";

export default function MainHr({ screen, addClass }) {
  return (
    <hr
      className={`border-main border-x-0 border-b-0 ${
        screen && "absolute left-0 z-[-10] w-screen"
      } ${addClass}`}
    />
  );
}
