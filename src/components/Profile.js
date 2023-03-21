import React, { useContext } from "react";
import { UserContext } from "../App";
import Navbar from "./Navbar";

function Profile() {
  const userContext=useContext(UserContext);
  return (
    <div>
      <Navbar />
      <div id="useInfo">
        <div id="profilePic">
          <i class="fa-solid fa-user"></i>
        </div>
        <h3 id="name">{userContext.userDetail.name}</h3>
        <div id="socials" className="userSocials">
          <a href="https://www.linkedin.com/home?originalSubdomain=in">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/home?originalSubdomain=in">
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a href="https://www.linkedin.com/home?originalSubdomain=in">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div id="contacts-details">
          <label htmlFor="Email">Email</label>
          <p>{userContext.userDetail.email}</p>
          <label htmlFor="Phone">Phone</label>
          <p>{userContext.userDetail.phone}</p>
        </div>
        <input type="button" value="Change Password" id="changePassword"/>
      </div>
    </div>
  );
}

export default Profile;
