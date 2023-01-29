//import logo from './logo.svg';
import "./App.css";
import Welcome from "./components/Welcome";
function App() {
  const user = {
    firstname: "Fateh",
    lastname: "Rehman",
  };

  return (
    <>
      <Welcome />
      <Welcome />
      <Welcome />
    </>
  );
}

export default App;
