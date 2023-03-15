import React, { useState } from "react";
function Navbar() {
  const [isClicked, setClicked] = useState(false);
  return (
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
  );
}

export default Navbar;
