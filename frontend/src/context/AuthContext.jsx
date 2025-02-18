import React, { createContext, useState, useEffect } from "react";
import { login as loginApi, register as registerApi, logout as logoutApi } from "../api/authApi";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (userData) => {
    const data = await loginApi(userData);
    setUser(data.user);
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  const register = async (userData) => {
    await registerApi(userData);
  };

  const logout = () => {
    logoutApi();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
