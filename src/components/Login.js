import React, { useContext } from "react";
import { UserContext } from "../App";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const userContext = useContext(UserContext);
  const auth = useAuth();
  const navigate = useNavigate();
  const hanldeLogin = (e, userContext) => {
    const username = e.target[0].value;
    const password = e.target[1].value;
    if (userContext.userDetail.name !== username) alert("user doesn't");
    else if (userContext.userDetail.password !== password)
      alert("username or password is wrong");
    else {
      auth.login();
      navigate("/notes", { replace: true });
    }
  };
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <nav id="homeNav">TakeNote</nav>
      <h3 id="loginHead">Login</h3>
      <form
        id="loginForm"
        onSubmit={(e) => {
          e.preventDefault();
          hanldeLogin(e, userContext);
        }}
      >
        <label htmlFor="username">username</label>
        <br />
        <input
          type="text"
          name="username"
          id="username"
          className="logininput"
          required
        />
        <br />
        <label htmlFor="password">paswword</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          className="logininput"
          required
        />
        <br />
        <input type="submit" value="Login" id="loginButton" />
        <input
          type="button"
          value="Go back"
          id="goBackButton"
          onClick={handleBack}
        />
      </form>
    </div>
  );
}

export default Login;
