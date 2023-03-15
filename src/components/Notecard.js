import React from "react";

function Notecard(props) {
  return (
    <div className="NoteCard">
      <h4 className="notehead">{props.noteHead}</h4>
      <p className="noteBody">
        {props.noteBody}
      </p>
      <div className="cardButtons">
        <button className="viewButton">View</button>
        <button className="deleteButton">Delete</button>
      </div>
    </div>
  );
}

export default Notecard;
