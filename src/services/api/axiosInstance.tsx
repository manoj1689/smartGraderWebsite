import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken, removeToken } from '../../utils/token/TokenUtils';
import { handleError } from '../../utils/error/ErrorUtils';

const axiosInstance = axios.create({
  baseURL: 'https://api.smartgrader.in', // Replace with your API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    NProgress.start();
    const token = getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    NProgress.done();
    handleError(error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    NProgress.done();
    return response;
  },
  (error) => {
    NProgress.done();
    if (error.response?.status === 401) {
      removeToken();
      window.location.href = '/login';
    } else if (error.response?.status === 500) {
      console.error('Server error:', error.response.data);
    }
    handleError(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;


// import axios from 'axios';

// // Create an Axios instance
// const axiosInstance = axios.create({
//   baseURL: 'https://api.smartgrader.in', // Replace with your API base URL
//   timeout: 10000, // Set a timeout for requests
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Request Interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Add authorization token to headers before sending the request
//     const token = localStorage.getItem('token'); // Or wherever you store your token
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     // Handle request error
//     return Promise.reject(error);
//   }
// );

// // Response Interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     // Handle response data
//     return response;
//   },
//   (error) => {
//     // Handle response error
//     if (error.response.status === 401) {
//       // Redirect to login page or handle unauthorized error
//       window.location.href = '/login';
//     } else if (error.response.status === 500) {
//       // Handle server errors
//       console.error('Server error:', error.response.data);
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
