import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',  // Backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (userData) => {
  return await api.post('/api/auth/register', userData);
};

export const loginUser = async (userData) => {
  return await api.post('/api/auth/login', userData);
};

export const fetchMarks = async (token) => {
  return await api.get('/marks', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createMark = async (data, token) => {
  return await api.post('/marks', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateMark = async (id, updatedMark, token) => {
    try {
      console.log("Updating with id:",id);
      const response = await axios.put(
        `/marks/${id}`, 
        updatedMark, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response;  // Ensure the response contains the updated data
    } catch (error) {
      console.log('Error updating mark:', error);
      throw error; // Re-throw the error to be caught by the calling function
    }
  };
  

export const deleteMark = async (id, token) => {
  return await api.delete(`/marks/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
