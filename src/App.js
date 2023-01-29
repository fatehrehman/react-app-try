//import logo from './logo.svg';
import "./App.css";
import Welcome from "./components/Welcome";
import Tick from "./components/Tick";
function App() {
  const user = {
    firstname: "Fateh",
    lastname: "Rehman",
  };

  return (
    <>
      <Tick />
      <Welcome datax="Fateh" />
      <Welcome datax="Rehman" />
      <Welcome datax="Wali" />
    </>
  );
}

export default App;
