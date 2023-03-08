import React from "react";

function Login() {
  return (
    <div>
      <nav id="homeNav">TakeNote</nav>
      <h3>Login</h3>
      <form>
        <label htmlFor="username">username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">paswword</label>
        <input type="password" name="password" id="password" />
        <input type="submit" value="submit" id="sbmit" />
      </form>
    </div>
  );
}

export default Login;
