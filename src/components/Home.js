import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
function getHour() {
  let hour = new Date().getHours;
  console.log(hour);
  if (hour > 1 && hour < 12) return 1;
  else return 2;
}
function Home() {
  const userdetails=useContext(UserContext);
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
