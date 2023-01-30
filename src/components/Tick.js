import React, { useState, useEffect } from "react";
function Tick() {
  const [ticker, setTikcer] = useState(new Date().toLocaleTimeString());
  // [varName (like name), fuctionName (like setName) to set variable name]
  function showTime() {
    setTikcer(new Date().toLocaleTimeString());
  }

  useEffect(() => {
    console.log("This is called on load and on each state change");
  });

  setInterval(showTime, 1000);
  return <h1>{ticker}</h1>;
}
export default Tick;
