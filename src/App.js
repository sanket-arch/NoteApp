import { Routes, Route } from "react-router-dom";
import React, { useReducer } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/signup";
import Notes from "./components/Notes";
import { AuthProvider } from "./components/auth";
import { RequireAuth } from "./components/RequireAuth";
const initialstate = {
  name: "",
  email: "",
  phone: 0,
  linkdin: "",
  github: "",
  password: "",
};
const reducer = (state, action) => {
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
function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <AuthProvider>
      <UserContext.Provider
        value={{
          userDetail: state,
          userDispatch: dispatch,
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
                  <Notes />
                </RequireAuth>
              }
            />
          </Routes>
          {/* <Notes/> */}
          <Footer />
        </div>
      </UserContext.Provider>
    </AuthProvider>
  );
}

export default App;
