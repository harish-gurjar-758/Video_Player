// services/api.js
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true, // enables cookie support
});
