import { useState } from "react";

function LoginController() {
  const [isLoggedin, setIsLoggedin] = useState(true);

  const handleLoginClick = () => {
    setIsLoggedin(!isLoggedin);
  };

  const handleLogoutClick = () => {
    setIsLoggedin(!isLoggedin);
  };

  let button;
  if (!isLoggedin) {
    button = <LoginButton onClick={handleLoginClick} />;
  } else {
    button = <LogoutButton onClick={handleLogoutClick} />;
  }
  return <div>{button}</div>;
}

function LoginButton(pros) {
  return <button onClick={pros.onClick}>Login</button>;
}

function LogoutButton(pros) {
  return <button onClick={pros.onClick}>Logout</button>;
}

export default LoginController;
