import React from "react";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Main from "./components/layout/Main";

export default function App() {
  return (
    <div className="mx-auto flex h-screen flex-col border-1 border-orange-400">
      <Header />
      <div className="flex grow">
        <Navigation />
        <Main />
      </div>
    </div>
  );
}
