import React, { useState } from "react";

export default function SandboxUseState() {
  const [userInput, setUserInput] = useState("");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(false);

  return (
    <div className="flex-col-center">
      <h2>useState</h2>
      <div
        className={`sandbox ${
          color ? "bg-blossom-800/50" : "bg-transparent"
        } 
   gap-2
    
    `}
      >
        <input
          type="text"
          value={userInput}
          placeholder="try me"
          onChange={(e) => setUserInput(e.target.value)}
          className="sandbox-input"
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
            onClick={() => {
              console.log("color button clicked")
              setColor((prev) => !prev)}}
            className="sandbox-button"
          >
            color
          </button>
        </section>
        <p className="sandbox-display">
          {userInput}
        </p>
      </div>
    </div>
  );
}
