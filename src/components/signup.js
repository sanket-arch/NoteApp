import React, { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
function Signup() {
  const userContext = useContext(UserContext);
  const navigate=useNavigate();
  return (
    <div id="signuppage">
      <nav id="homeNav">TakeNote</nav>
      <h2 id="signuphead">SignUp</h2>
      <form
        id="signupForm"
        onSubmit={(e) => {
          e.preventDefault();
          userContext.userDispatch(e);
          navigate('/')
        }}
      >
        <label htmlFor="Name">Name</label>
        <br />
        <input type="text" name="Name" className="signupinput" />
        <br />
        <label htmlFor="Email">Email</label>
        <br />
        <input type="email" name="Email" className="signupinput" />
        <br />
        <label htmlFor="Phone">Phone</label>
        <br />
        <input type="text" name="Phone" className="signupinput" />
        <br />
        <label htmlFor="linkdin">linkdIn Username</label>
        <br />
        <input type="text" name="linkidin" className="signupinput" />
        <br />
        <label htmlFor="github">Github username</label>
        <br />
        <input type="text" name="github" className="signupinput" />
        <br />
        <label htmlFor="password">password</label>
        <br />
        <input type="password" name="password" className="signupinput" />
        <br />
        <input type="submit" value="SignUp" id="submitButton" />
      </form>
      {/* <button
        onClick={() => {
          console.log(userContext.userDetail);
        }}
      >click me</button> */}
    </div>
  );
}

export default Signup;
