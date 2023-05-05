import React from "react";
import UsingUseToggle from "../hookLibrary/UsingUseToggle";
import UsingUseWindowSize from "../hookLibrary/UsingUseWindowSize";
import UsingUseUpdateEffect from "../hookLibrary/UsingUseUpdateEffect";

export default function CustomHooks() {
  return (
    <div className="pass-overflow w-full p-2">
      <main className="w-effective blush-frame pass-overflow flex h-full flex-col text-vincent-800">
        <header className="blush-header">
          <h1>Universal Custom Hooks</h1>
          <p className="tagline">Hooks: the feather in every duck's cap.</p>
        </header>
        <section className="pass-overflow flex flex-auto flex-col  gap-2 bg-transparent/20 p-2 text-petal">
          <div className="flex-col-center gap-8">
            <UsingUseUpdateEffect />
            <UsingUseToggle />
            <UsingUseWindowSize />
          </div>
        </section>
      </main>
    </div>
  );
}
