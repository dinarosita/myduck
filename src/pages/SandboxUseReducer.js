import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "increment":
      return { ...state, count: state.count + 1 };
    case "toggleColor":
      return { ...state, color: !state.color };
    case "updateInput":
      return { ...state, input: action.payload };
    default:
      throw new Error();
  }
};

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  TOGGLE_COLOR: "toggleColor",
  UPDATE_INPUT: "updateInput",
};

export default function SandboxUseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    color: false,
    input: "",
  });
  return (
    <div className="flex-col-center">
      <h2>useReducer</h2>
      <div
        className={`sandbox  gap-2 ${
          state.color ? "bg-blossom-800/50" : "bg-transparent"
        }`}
      >
        <input
          type="text"
          className="sandbox-input"
          placeholder="try me"
          value={state.input}
          onChange={(e) =>
            dispatch({ type: ACTION.UPDATE_INPUT, payload: e.target.value })
          }
        />
        <p>{state.count}</p>
        <section className="flex flex-row gap-2">
          <button
            onClick={() => dispatch({ type: ACTION.DECREMENT })}
            className="sandbox-button"
          >
            -
          </button>
          <button
            onClick={() => dispatch({ type: ACTION.INCREMENT })}
            className="sandbox-button"
          >
            +
          </button>
          <button
            onClick={() => dispatch({ type: ACTION.TOGGLE_COLOR })}
            className="sandbox-button"
          >
            color
          </button>
        </section>
        <p className="sandbox-display">
          {state.input}
        </p>
      </div>
    </div>
  );
}
