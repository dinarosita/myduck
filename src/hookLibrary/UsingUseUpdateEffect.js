import React, { useEffect, useState } from "react";
import useUpdateEffect from "./useUpdateEffect";

export default function UsingUseUpdateEffect() {
  const [message, setMessage] = useState("")
  const [messageNormal, setMessageNormal] = useState("")
  const [count, setCount] = useState(0)
  
  useUpdateEffect(() => {
    setMessage(`Welcome! You are guest number ${count}`)
  },[count])

  useEffect(() => {
    setMessageNormal(`Welcome! You are guest number ${count}`)
  },[count])

  function countUp(){
    setCount(prevCount => prevCount + 1)
  }
  return (
    <div className="flex-col-center">
      <h2>useUpdateEffect</h2>
      <div className="sandbox">
        <div>Below should only display upon click:</div>
        <div className="sandbox-display">{message}</div>
        <button className="sandbox-button" onClick={countUp}>Get your number</button>
        <div className="pt-2">Note: Refresh page for seeing the effect. Using regular useEffect hook, it will also run the first time page get rendered, like below:</div>
        <div className="sandbox-display">{messageNormal}</div>
      </div>
      
    </div>
  );
}
