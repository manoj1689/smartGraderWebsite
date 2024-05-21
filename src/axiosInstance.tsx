
// /src/axiosInstance.tsx
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://34.131.249.177:8000', // Replace with your FastAPI server URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the access token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      (error.response && error.response.data.message) || error.message || error.toString();
    return Promise.reject(message);
  }
);

export default axiosInstance;
