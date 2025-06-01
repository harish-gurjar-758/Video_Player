import { create } from 'zustand';
import toast from 'react-hot-toast';
import { axiosInstance } from '../services/axiosApi.js'; // make sure this has withCredentials enabled

export const useAuthStore = create((set, get) => ({
  user: null,
  loading: false,

  // Create Account
  createAccount: async (formData) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.post('/auth/create-account', formData);
      set({ user: res.data });
      toast.success('Account created successfully!');
    } catch (error) {
      const message = error?.response?.data?.message || 'Error creating account';
      toast.error(message);
    } finally {
      set({ loading: false });
    }
  },

  // Login
  login: async (credentials) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.post('/auth/login', credentials);
      set({ user: res.data });
      toast.success('Logged in successfully!');
    } catch (error) {
      const message = error?.response?.data?.message || 'Login failed';
      toast.error(message);
    } finally {
      set({ loading: false });
    }
  },

  // Get Current Logged In User
  getLoggedInUser: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get('/auth/me');
      set({ user: res.data });
    } catch (error) {
      console.log('User not logged in');
      set({ user: null });
    } finally {
      set({ loading: false });
    }
  },

  // Logout
  logout: async () => {
    try {
      await axiosInstance.post('/auth/logout'); // Optional backend endpoint
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      set({ user: null });
      toast.success('Logged out');
    }
  },
}));
