import React, { useContext } from "react";
import { UserContext } from "../App";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Notecard from "./Notecard";
function Notes() {
  const auth = useAuth();
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <input type="text" placeholder="Search Title" id="searchBox" />
      <div id="notesArea">
        <Notecard />
      </div>
      welcome {userContext.userDetail.name}
      <button onClick={handleLogout}>LOG OUT</button>
    </div>
  );
}

export default Notes;
