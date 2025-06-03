import axios from 'axios';

const BASIC_URL = "http://localhost:5000/api";

// Create Account

export const createAccountApi = async (userData) => {
  try {
    const response = await axios.post(`${BASIC_URL}/auth/create-account`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to create account.");
  }
};

// Login Account
export const loginApi = async (userData) => {
  try {
    const response = await axios.post(`${BASIC_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed.");
  }
};

// Get Logged-in User

export const getLoggedInUserApi = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No token found. Please log in.");
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  try {
    const response = await axios.get(`${BASIC_URL}/auth/me`, config);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "User not logged in.");
  }
};

// Logout 

export const logoutApi = async ()=>{
  try {
    await axios.post(`${BASIC_URL}/auth/logout`)
  } catch (error) {
    throw new Error(error.response?.data?.message || "Log out failed.");
  }
}
