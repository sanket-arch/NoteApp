import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
function Navbar() {
  const [isClicked, setClicked] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      <nav id="NavBar">
        <h2 id="logo">TakeNote</h2>
        <button
          id="menuHamburgur"
          onClick={() => {
            isClicked ? setClicked(false) : setClicked(true);
          }}
        >
          {!isClicked ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-sharp fa-solid fa-xmark"></i>
          )}
        </button>
      </nav>
      {isClicked && (
        <div className="slideMenu">
          <Link to="/profile">Profile</Link>
          <Link to="/notes">View Notes</Link>
          <Link to="/addnotes">Add Notes</Link>
          <Link to="/" onClick={handleLogout}>Log Out</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
