import React from "react";
import Navbar from "./Navbar";
import Notecard from "./Notecard";

function Notes() {
  return (
    <div>
      <Navbar />
      <input type="text" placeholder="Search Title" id="searchBox" />
      <div id="notesArea">
        <Notecard
          noteHead="Study DOS"
          noteBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        repellendus similique rem, ut modi velit corrupti obcaecati dicta culpa
        nesciunt illum dolorum optio dolores voluptate, eum et iste! Similique,
        illum!"
        />
        <Notecard
          noteHead="Study DOS"
          noteBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        repellendus similique rem, ut modi velit corrupti obcaecati dicta culpa
        nesciunt illum dolorum optio dolores voluptate, eum et iste! Similique,
        illum!"
        />
        <Notecard
          noteHead="Study DOS"
          noteBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        repellendus similique rem, ut modi velit corrupti obcaecati dicta culpa
        nesciunt illum dolorum optio dolores voluptate, eum et iste! Similique,
        illum!"
        />
        <Notecard
          noteHead="Study DOS"
          noteBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        repellendus similique rem, ut modi velit corrupti obcaecati dicta culpa
        nesciunt illum dolorum optio dolores voluptate, eum et iste! Similique,
        illum!"
        />
        <Notecard
          noteHead="Study DOS"
          noteBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        repellendus similique rem, ut modi velit corrupti obcaecati dicta culpa
        nesciunt illum dolorum optio dolores voluptate, eum et iste! Similique,
        illum!"
        />
      </div>
    </div>
  );
}

export default Notes;
