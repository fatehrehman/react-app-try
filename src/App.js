//import logo from './logo.svg';
import "./App.css";

function App() {
  const user = {
    firstname: "Fateh",
    lastname: "Rehman",
  };
  function getUserName(user) {
    return user.firstname + " " + user.lastname;
  }
  function getGreetings(user) {
    if (user) {
      return "Hi " + getUserName(user) + "!";
    } else {
      return "Hi Stranger!";
    }
  }
  return <h1>{getGreetings(user)}</h1>;
}

export default App;
