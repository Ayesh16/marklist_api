import axios from "axios";

const API_URL = "http://localhost:4000/marks"; // Change according to backend URL

export const getMarks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createMark = async (markData) => {
  const response = await axios.post(API_URL, markData);
  return response.data;
};

export const updateMark = async (id, markData) => {
  const response = await axios.put(`${API_URL}/${id}`, markData);
  return response.data;
};

export const deleteMark = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
