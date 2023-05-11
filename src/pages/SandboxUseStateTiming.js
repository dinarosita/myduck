import React, { useState } from "react";

export default function SandboxUseStateTiming() {
  const [arr, setArr] = useState([1, 2, 3]);
  // const [length, setLength] = useState();
  console.log("++++++++++++++++Rendering start+++++++++++++");
  console.log(arr);

  // useEffect(() => {
  //   console.log(arr)
  //   setLength(arr.length)
  // }, [arr])
  function addNumberToStart(number) {
    setArr((prev) => {
      return [number, ...prev];
    });
  }

  function addNumberToEnd(number) {
    setArr((prev) => {
      return [...prev, number];
    });
  }

  return (
    <div className="flex-col-center">
      <h2>useState Timing</h2>
      <div className="sandbox">
        <div className="sandbox-display">{arr.join(", ")}</div>
        <button
          onClick={() => {
            addNumberToStart(0);
            addNumberToEnd(0);
          }}
          className="sandbox-button"
        >
          Add 0 in the beginning and end
        </button>
        {/* <div>Length: {length}</div> */}
      </div>
    </div>
  );
}
