import React from "react";
import SandboxUseReducer from "./SandboxUseReducer";
import SandboxUseState from "./SandboxUseState";

export default function Sandbox() {
  return (
    <div className="pass-overflow w-full p-2">
      <main className="w-effective blush-frame pass-overflow flex h-full flex-col text-vincent-800">
        <header className="blush-header">
          <h1>Sandbox</h1>
          <p className="tagline">Currently no experiment</p>
        </header>

        <section className="pass-overflow flex flex-auto flex-col  gap-2 bg-transparent/20 p-2 text-petal">
          <div className="flex-col-center gap-8">
            <SandboxUseReducer />
            <SandboxUseState />
          </div>
        </section>
      </main>
    </div>
  );
}
