import { Routes, Route } from "react-router-dom";
import React, { useReducer } from "react";
import "./App.css";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/signup";
import Notes from "./components/Notes";
import TakeNotes from "./components/TakeNotes";
import { AuthProvider } from "./components/auth";
import { RequireAuth } from "./components/RequireAuth";
import Profile from "./components/Profile";
const initialstate = {
  name: "",
  email: "",
  phone: 0,
  linkdin: "",
  github: "",
  password: "",
};
const reducerUser = (state, action) => {
  return {
    name: action.target[0].value,
    email: action.target[1].value,
    phone: action.target[2].value,
    linkdin: action.target[3].value,
    github: action.target[4].value,
    password: action.target[5].value,
  };
};

export const UserContext = React.createContext();
const note = {
  title: "",
  noteBody: "",
};

const recducerNotes = (state, action) => {
  return {
    title: action.target[0].value,
    noteBody: action.target[1].value,
  };
};

export const NoteContext = React.createContext();
function App() {
  const [state, dispatchUser] = useReducer(reducerUser, initialstate);
  const [Note, dispatchNotes] = useReducer(recducerNotes, note);
  return (
    <AuthProvider>
      <UserContext.Provider
        value={{
          userDetail: state,
          userDispatch: dispatchUser,
        }}
      >
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="SignUp" element={<Signup />} />

            <Route
              path="notes"
              element={
                <RequireAuth>
                  {" "}
                  <NoteContext.Provider
                    value={{ noteDetail: Note, noteDispatch: dispatchNotes }}
                  >
                    <Notes />
                  </NoteContext.Provider>
                </RequireAuth>
              }
            />
            <Route
              path="addnotes"
              element={
                <RequireAuth>
                  {" "}
                  <NoteContext.Provider
                    value={{ noteDetail: Note, noteDispatch: dispatchNotes }}
                  >
                    <TakeNotes />{" "}
                  </NoteContext.Provider>
                </RequireAuth>
              }
            />

            <Route
              path="profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
          </Routes>
          {/* <Footer /> */}
        </div>
      </UserContext.Provider>
    </AuthProvider>
  );
}

export default App;
