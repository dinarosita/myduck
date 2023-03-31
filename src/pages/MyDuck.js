import React from "react";
import Navigation from "../components/layout/Navigation";
import Main from "../components/layout/Main";

export default function MyDuck() {
  return (
    <div className="flex grow">
      <Navigation />
      <Main />
    </div>
  );
}
