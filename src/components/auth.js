import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [isloggedIn, setLogin] = useState(false);
  const login = () => {
    setLogin(true);
  };
  const logout = () => {
    setLogin(false);
  };
  return (
    <AuthContext.Provider value={{ isloggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
