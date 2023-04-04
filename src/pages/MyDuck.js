import React from "react";
import Navigation from "../components/layout/Navigation";
import Main from "../components/layout/Main";

export default function MyDuck() {
  return (
    <div className="flex-1 grow shrink flex overflow-auto gap-2">
      <Navigation />
      <Main />
    </div>
  );
}
