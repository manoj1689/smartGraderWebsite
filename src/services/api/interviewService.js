import axiosInstance from './axiosInstance';

export const createInterview = async (interviewData) => {
  const response = await axiosInstance.post('/interviews', interviewData);
  return response.data;
};

export const fetchInterviews = async () => {
  const response = await axiosInstance.get('/interviews');
  return response.data;
};

export const updateInterview = async (interviewId, interviewData) => {
  const response = await axiosInstance.put(`/interviews/${interviewId}`, interviewData);
  return response.data;
};

export const deleteInterview = async (interviewId) => {
  const response = await axiosInstance.delete(`/interviews/${interviewId}`);
  return response.data;
};
