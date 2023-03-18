import React, { useContext } from "react";
import Navbar from "./Navbar";
import { NoteContext } from "../App";
function TakeNotes() {
  const notecontext = useContext(NoteContext);
  return (
    <div id="NotePage">
      <Navbar />
      <h3 id="AddNoteHead">Add Notes</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          notecontext.noteDispatch(e);
        }}
      >
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" name="title" id="noteTitle" placeholder="Title" />
        <br />
        <label htmlFor="note">Note</label>
        <br />
        <textarea
          name="note"
          id="noteArea"
          cols="30"
          rows="15"
          placeholder="Note"
        ></textarea>
        <br />
        <input type="submit" value="Add" id="AddNoteButton" />
      </form>
    </div>
  );
}

export default TakeNotes;
