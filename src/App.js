//import logo from './logo.svg';
import "./App.css";
import Welcome from "./components/Welcome";
import Tick from "./components/Tick";
import { useState } from "react";
import LoginController from "./components/LoginController";
import Blog from "./components/Blog";

function App() {
  // const user = {
  //   firstname: "Fateh",
  //   lastname: "Rehman",
  // };
  // const [flag, setFlag] = useState(true);

  // const reverseFlag = () => {
  //   setFlag(!flag);
  // };

  const posts = [
    {
      id: 1,
      title: "Hello-1",
      content: "Welcome Hello from One",
    },
    {
      id: 2,
      title: "Hello-2",
      content: "Welcome Hello from two",
    },
    {
      id: 3,
      title: "Hello-3",
      content: "Welcome Hello from three",
    },
    {
      id: 4,
      title: "Hello-4",
      content: "Welcome Hello from four",
    },
  ];

  return (
    <>
      {/* <button onClick={reverseFlag}>
        {flag ? "Hide Clock" : "Show Clock"}
      </button>
      {flag ? <Tick /> : "No Ticekr"}
      {/* it will stop the UseEffect cycle too and on hiding it will call the cleanup function that is to be called after UseEffect*/}
      {/* <Welcome datax="Fateh" /> */}
      {/* <Welcome datax="Rehman" /> */}
      {/* <Welcome datax="Wali" /> */}
      {/* <LoginController /> */}
      <Blog posts={posts} />
    </>
  );
}

export default App;
