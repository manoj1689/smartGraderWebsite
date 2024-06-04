import axiosInstance from './axiosInstance';

export const fetchUserData = async () => {
  const response = await axiosInstance.get('/user/data');
  return response.data;
};

export const updateUserProfile = async (userData) => {
  const response = await axiosInstance.put('/user/profile', userData);
  return response.data;
};
