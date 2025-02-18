import axios from "axios";

const API_URL = "http://localhost:4000/api/auth"; // Change according to backend URL

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};
