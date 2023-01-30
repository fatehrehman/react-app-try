import React, { useState, useEffect } from "react";
function Tick() {
  const [ticker, setTikcer] = useState(new Date().toLocaleTimeString());
  // [varName (like name), fuctionName (like setName) to set variable name]
  const [varX, setVarX] = useState("X");

  function showTime() {
    setTikcer(new Date().toLocaleTimeString());
    setVarX("Y");
  }

  useEffect(() => {
    console.log("This is called on load and on each varx state change");
  }, [varX]);

  setInterval(showTime, 1000);

  return <h1>{ticker}</h1>;
}
export default Tick;
