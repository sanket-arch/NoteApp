import React from "react";
import { Link } from "react-router-dom";
function getHour() {
  let hour = new Date().getHours;
  if (hour > 1 && hour < 12) return 1;
  else return 2;
}
function Home() {
  return (
    <div>
      <nav id="homeNav">TakeNote</nav>
      <div id="salutation">
        Good <br />
        {getHour() === 1 ? "Morning" : "Evening"}!
      </div>
      <div id="loginSignup">
        <Link to="Login">
          <button id="login">Login</button>
        </Link>
        <Link to="SignUp">
          <button id="signup">SignUp</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
