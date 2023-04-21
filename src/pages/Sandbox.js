import React from "react";
import { useWindowSize } from "../hooks/useWindowSize";

export default function Sandbox() {
    const windowSize = useWindowSize()
  return (
    <div className="pass-overflow p-2 w-full">
      <main className="w-effective blush-frame flex h-full flex-col pass-overflow text-vincent-800">

        <header className="blush-header">
          <h1>Sandbox</h1>
          <p className="tagline">
            Currently no experiment
          </p>
        </header>
        <section className="pass-overflow flex-auto bg-transparent/20 p-2 text-petal">
            <h2>Window size</h2>
            <p>Width: {windowSize.width}</p>
            <p>Height: {windowSize.height}</p>
            
        </section>
      </main>
    </div>
  );
}
