import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

// --------
// Auth - Users
// --------

// Create Account --
export const createAccount = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/create-account`, userData);
    return response.data;
  } catch (error) {
    console.error('Error creating account:', error.response?.data || error.message);
    throw error;
  }
};
