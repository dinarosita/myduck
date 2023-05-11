import React from "react";
import SandboxUseReducer from "./SandboxUseReducer";
import SandboxUseState from "./SandboxUseState";
import SandboxUseStateTiming from "./SandboxUseStateTiming";

export default function Sandbox() {
  return (
    <div className="pass-overflow w-full px-2">
      <main className="w-effective blush-frame pass-overflow flex h-full flex-col text-navy">
        <header>
          <h1>Sandbox</h1>
          <p className="tagline">Come and play, ducks!</p>
        </header>

        <section className="pass-overflow flex flex-auto flex-col  gap-2 bg-transparent/20 p-2 text-petal">
          <div className="flex-col-center gap-8">
            <SandboxUseStateTiming />
            <SandboxUseReducer />
            <SandboxUseState />
          </div>
        </section>
      </main>
    </div>
  );
}
