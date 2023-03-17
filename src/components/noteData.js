import { useState, createContext, useContext } from "react";

const noteContext = createContext(null);
const NoteArr = [{}];

export const NoteProvider = ({ children }) => {
  const [noteArray, setNoteArray] = useState(NoteArr);
  const addNote = (e) => {
    setNoteArray([...NoteArr]);
  };
  return (
    <noteContext.Provider value={{ noteArray, addNote }}>
      {children}
    </noteContext.Provider>
  );
};

export const useNote = () => {
  return useContext(noteContext);
};
