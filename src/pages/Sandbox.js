import React from "react";

export default function Sandbox() {
  return (
    <div className="pass-overflow p-2 w-full">
      <main className="w-effective white-frame flex h-full flex-col pass-overflow text-vincent-800">

        <header className="white-header">
          <h1>Sandbox</h1>
          <p className="tagline">
            Currently no experiment
          </p>
        </header>
        <section className="pass-overflow flex-auto bg-transparent/20 p-2 text-petal"></section>
      </main>
    </div>
  );
}
