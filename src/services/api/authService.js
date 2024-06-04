import axiosInstance from './axiosInstance';
import { setToken,getToken, removeToken } from "../../utils/token/TokenUtils.js";

export const login = async (credentials) => {
  const response = await axiosInstance.post('/auth/login', credentials);
  const token = response.data.token;
  setToken(token);
  return response.data;
};

export const signup = async (userInfo) => {
  const response = await axiosInstance.post('/auth/signup', userInfo);
  const token = response.data.token;
  setToken(token);
  return response.data;
};

export const logout = () => {
  removeToken();
};
