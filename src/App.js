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
      <Welcome datax="Fateh" />
      <Welcome datax="Rehman" />
      <Welcome datax="Wali" />
    </>
  );
}

export default App;
