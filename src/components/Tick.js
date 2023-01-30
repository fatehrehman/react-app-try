import React, { useState } from "react";
function Tick() {
  const [ticker, setTikcer] = useState(new Date().toLocaleTimeString());
  // [varName (like name), fuctionName (like setName) to set variable name]
  function showTime() {
    setTikcer(new Date().toLocaleTimeString());
  }
  setInterval(showTime, 1000);
  return <h1>{ticker}</h1>;
}
export default Tick;
