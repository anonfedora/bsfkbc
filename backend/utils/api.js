/**
 * This file contains utility functions for making API requests to the backend
 * Import this file in your frontend components to interact with the backend
 */

// Base URL for API requests
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    const error = data.message || response.statusText;
    throw new Error(error);
  }

  return data;
};

// Get token from local storage
const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

// API request functions
export const api = {
  // Auth endpoints
  auth: {
    register: async (userData) => {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      return handleResponse(response);
    },

    login: async (credentials) => {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      return handleResponse(response);
    },

    getCurrentUser: async () => {
      const token = getToken();

      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return handleResponse(response);
    },
  },

  // User endpoints
  users: {
    updateProfile: async (userData) => {
      const token = getToken();

      if (!token) {
        throw new Error("No authentication token found");
      }

      // Use FormData for file uploads
      const formData = new FormData();

      // Append user data to form
      Object.keys(userData).forEach((key) => {
        if (userData[key] !== undefined) {
          formData.append(key, userData[key]);
        }
      });

      const response = await fetch(`${API_BASE_URL}/users/profile`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      return handleResponse(response);
    },
  },
};

export default api;
