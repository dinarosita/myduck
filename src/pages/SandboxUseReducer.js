import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "decrement":
            return { ...state, count: state.count - 1};
        case "increment":
            return {...state, count: state.count + 1};
        case "toggleColor":
            return {...state,  color: !state.color};
        case "updateInput":
            return {...state, input: action.payload}
        default:
            throw new Error();
    }         
}

const ACTION ={
    INCREMENT: "increment",
    DECREMENT: "decrement",
    TOGGLE_COLOR: "toggleColor",
    UPDATE_INPUT: "updateInput",
}

export default function SandboxUseReducer() {
    const [state, dispatch] = useReducer(reducer, {count:0, color: false, input:""})
  return (
    <div className="flex-col-center">
      <h2>useReducer</h2>
      <div className={`flex-col-center my-2 w-80 gap-2 rounded-lg  border border-petal p-4 bg-${state.color ? "blossom-800/50" : "transparent"}`} >
        <input
          type="text"
          className="w-full rounded-full p-1 text-center text-vincent-900"
            value={state.input}
            onChange={e => dispatch({type: ACTION.UPDATE_INPUT, payload: e.target.value})}
        />
        <p>{state.count}</p>
        <section className="flex flex-row gap-2">
          <button onClick={() => dispatch({type: ACTION.DECREMENT})} className="sandbox-button">-</button>
          <button onClick={() => dispatch({type: ACTION.INCREMENT})} className="sandbox-button">+</button>
          <button onClick = {() => dispatch({type: ACTION.TOGGLE_COLOR})} className="sandbox-button">color</button>
        </section>
        <p className="mt-2 h-8 w-full bg-transparent/10 p-1 text-center">{state.input}</p>
      </div>
    </div>
  );
}
