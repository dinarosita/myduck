import React, { useState } from "react";

export default function SandboxUseState() {
  const [userInput, setUserInput] = useState("");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(false);

  return (
    <div className="flex-col-center">
      <h2>useState</h2>
      <div
        className={`flex-col-center my-2 w-80 rounded-lg border  border-petal p-4 bg-${
          color ? "blossom-800/50" : "transparent"
        } 
   gap-2
    
    `}
      >
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="w-full rounded-full p-1 text-center text-vincent-900"
        />
        <p>{count}</p>
        <section className="flex flex-row gap-2">
          <button
            onClick={() => setCount((prev) => prev - 1)}
            className="sandbox-button"
          >
            -
          </button>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="sandbox-button"
          >
            +
          </button>
          <button
            onClick={() => setColor((prev) => !prev)}
            className="sandbox-button"
          >
            color
          </button>
        </section>
        <p className="mt-2 h-8 w-full bg-transparent/10 p-1 text-center">
          {userInput}
        </p>
      </div>
    </div>
  );
}
