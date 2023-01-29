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
      <Welcome datax={user} />
      <Welcome datax={user} />
      <Welcome datax={user} />
    </>
  );
}

export default App;
