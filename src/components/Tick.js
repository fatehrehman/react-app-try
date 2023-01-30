import React, { useState, useEffect } from "react";
function Tick() {
  const [ticker, setTikcer] = useState(new Date().toLocaleTimeString());
  // [varName (like name), fuctionName (like setName) to set variable name]
  //   const [varX, setVarX] = useState("X");

  function showTime() {
    setTikcer(new Date().toLocaleTimeString());
    // setVarX("Y");
  }

  useEffect(() => {
    // UseEffect is used to do some api call or to perform other action on some or specific var's state change
    console.log("This is called on load & ticker change");
    const tickercall = setInterval(showTime, 1000);
    return () => {
      console.log("This is called at the end of UseEffect");
      clearInterval(tickercall);
      // it is used for cleanup like hide loader etc or to do other action at the end of UseEffect
    };
  }, [ticker]);

  return <h1>{ticker}</h1>;
}
export default Tick;
