// /src/axiosInstance.tsx
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://34.131.249.177:8000', // Replace with your FastAPI server URL  http://61.247.224.53:8081
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      (error.response && error.response.data.message) || error.message || error.toString();
    return Promise.reject(message);
  }
);

export default axiosInstance;
