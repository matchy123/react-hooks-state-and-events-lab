import React from "react";
import { useState } from "react";

function Toggle() {
  return <button>OFF</button>;
  function handleClick(){
    setIsOn((isOn)=> !isOn)
  }
  const [isOn, setIsOn]= useState(false)
  // const[isOff, setIsOff]= useState(true)
  return <button style={{ background: 'red' }} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;