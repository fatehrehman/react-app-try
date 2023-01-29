import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

function clock() {
  const elementX = (
    <div>
      <h1>Hello</h1>
      <h2>Tick {new Date().toLocaleTimeString()}</h2>
      // Only h2 element is changed as shown in the inspect window
    </div>
  );
  root.render(elementX);
}
setInterval(clock, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
