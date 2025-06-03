import axios from 'axios';

const BASIC_URL = "http://localhost:5000/api";

export const createAccountApi = async (userData) => {
  try {
    const response = await axios.post(`${BASIC_URL}/auth/create-account`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to create account.");
  }
};
