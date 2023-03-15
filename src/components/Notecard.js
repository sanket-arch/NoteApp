import React from "react";

function Notecard() {
  return (
    <div className="NoteCard">
      <h4 className="notehead">Study DOS</h4>
      <p className="noteBody">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        repellendus similique rem, ut modi velit corrupti obcaecati dicta culpa
        nesciunt illum dolorum optio dolores voluptate, eum et iste! Similique,
        illum!
      </p>
      <div className="buttons">
        <button className="viewButton">View</button>
        <button className="deleteButton">Delete</button>
      </div>
    </div>
  );
}

export default Notecard;
