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

    getAllUsers: async () => {
      const token = getToken();

      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(`${API_BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return handleResponse(response);
    },
  },

  // Event endpoints
  events: {
    getAllEvents: async (filters = {}) => {
      // Build query string from filters
      const queryParams = new URLSearchParams();

      Object.keys(filters).forEach((key) => {
        if (filters[key] !== undefined) {
          queryParams.append(key, filters[key]);
        }
      });

      const response = await fetch(
        `${API_BASE_URL}/events?${queryParams.toString()}`
      );

      return handleResponse(response);
    },

    getEventById: async (id) => {
      const response = await fetch(`${API_BASE_URL}/events/${id}`);

      return handleResponse(response);
    },

    createEvent: async (eventData) => {
      const token = getToken();

      if (!token) {
        throw new Error("No authentication token found");
      }

      // Use FormData for file uploads
      const formData = new FormData();

      // Append event data to form
      Object.keys(eventData).forEach((key) => {
        if (eventData[key] !== undefined) {
          formData.append(key, eventData[key]);
        }
      });

      const response = await fetch(`${API_BASE_URL}/events`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      return handleResponse(response);
    },

    registerForEvent: async (id) => {
      const token = getToken();

      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(`${API_BASE_URL}/events/${id}/register`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return handleResponse(response);
    },
  },

  // News endpoints
  news: {
    getAllNews: async (filters = {}) => {
      // Build query string from filters
      const queryParams = new URLSearchParams();

      Object.keys(filters).forEach((key) => {
        if (filters[key] !== undefined) {
          queryParams.append(key, filters[key]);
        }
      });

      const response = await fetch(
        `${API_BASE_URL}/news?${queryParams.toString()}`
      );

      return handleResponse(response);
    },

    getNewsById: async (id) => {
      const response = await fetch(`${API_BASE_URL}/news/${id}`);

      return handleResponse(response);
    },

    createNews: async (newsData) => {
      const token = getToken();

      if (!token) {
        throw new Error("No authentication token found");
      }

      // Use FormData for file uploads
      const formData = new FormData();

      // Append news data to form
      Object.keys(newsData).forEach((key) => {
        if (newsData[key] !== undefined) {
          formData.append(key, newsData[key]);
        }
      });

      const response = await fetch(`${API_BASE_URL}/news`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      return handleResponse(response);
    },
  },

  // Gallery endpoints
  gallery: {
    getAllGalleryItems: async (filters = {}) => {
      // Build query string from filters
      const queryParams = new URLSearchParams();

      Object.keys(filters).forEach((key) => {
        if (filters[key] !== undefined) {
          queryParams.append(key, filters[key]);
        }
      });

      const response = await fetch(
        `${API_BASE_URL}/gallery?${queryParams.toString()}`
      );

      return handleResponse(response);
    },

    uploadGalleryItem: async (galleryData) => {
      const token = getToken();

      if (!token) {
        throw new Error("No authentication token found");
      }

      // Use FormData for file uploads
      const formData = new FormData();

      // Append gallery data to form
      Object.keys(galleryData).forEach((key) => {
        if (galleryData[key] !== undefined) {
          formData.append(key, galleryData[key]);
        }
      });

      const response = await fetch(`${API_BASE_URL}/gallery`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      return handleResponse(response);
    },
  },

  // Video endpoints
  videos: {
    getAllVideos: async (filters = {}) => {
      // Build query string from filters
      const queryParams = new URLSearchParams();

      Object.keys(filters).forEach((key) => {
        if (filters[key] !== undefined) {
          queryParams.append(key, filters[key]);
        }
      });

      const response = await fetch(
        `${API_BASE_URL}/videos?${queryParams.toString()}`
      );

      return handleResponse(response);
    },

    getVideoById: async (id) => {
      const response = await fetch(`${API_BASE_URL}/videos/${id}`);

      return handleResponse(response);
    },

    uploadVideo: async (videoData) => {
      const token = getToken();

      if (!token) {
        throw new Error("No authentication token found");
      }

      // Use FormData for file uploads
      const formData = new FormData();

      // Append video data to form
      Object.keys(videoData).forEach((key) => {
        if (videoData[key] !== undefined) {
          formData.append(key, videoData[key]);
        }
      });

      const response = await fetch(`${API_BASE_URL}/videos`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      return handleResponse(response);
    },

    likeVideo: async (id) => {
      const token = getToken();

      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(`${API_BASE_URL}/videos/${id}/like`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return handleResponse(response);
    },
  },

  // Hymn endpoints
  hymns: {
    getAllHymns: async (filters = {}) => {
      // Build query string from filters
      const queryParams = new URLSearchParams();

      Object.keys(filters).forEach((key) => {
        if (filters[key] !== undefined) {
          queryParams.append(key, filters[key]);
        }
      });

      const response = await fetch(
        `${API_BASE_URL}/hymns?${queryParams.toString()}`
      );

      return handleResponse(response);
    },

    getHymnById: async (id) => {
      const response = await fetch(`${API_BASE_URL}/hymns/${id}`);

      return handleResponse(response);
    },

    addHymn: async (hymnData) => {
      const token = getToken();

      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(`${API_BASE_URL}/hymns`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(hymnData),
      });

      return handleResponse(response);
    },
  },
};

export default api;
