//import logo from './logo.svg';
import "./App.css";
import Welcome from "./components/Welcome";
import Tick from "./components/Tick";
import { useState } from "react";
import LoginController from "./components/LoginController";

function App() {
  // const user = {
  //   firstname: "Fateh",
  //   lastname: "Rehman",
  // };
  const [flag, setFlag] = useState(true);

  const reverseFlag = () => {
    setFlag(!flag);
  };

  return (
    <>
      {/* <button onClick={reverseFlag}>
        {flag ? "Hide Clock" : "Show Clock"}
      </button>
      {flag ? <Tick /> : "No Ticekr"}
      {/* it will stop the UseEffect cycle too and on hiding it will call the cleanup function that is to be called after UseEffect* /}
      <Welcome datax="Fateh" />
      <Welcome datax="Rehman" />
      <Welcome datax="Wali" /> */}
      <LoginController />
    </>
  );
}

export default App;
