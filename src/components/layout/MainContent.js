import React from "react";
import Navigation from "./Navigation";
import Main from "./Main";

export default function MainContent() {
  return (
    <div className="w-effective relative flex h-full flex-auto flex-row overflow-auto px-mainspace gap-mainspace">
      <Navigation />
      <Main />
    </div>
  );
}
