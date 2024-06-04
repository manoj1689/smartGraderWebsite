import axiosInstance from './axiosInstance';

export const generateQuestions = async (criteria) => {
  const response = await axiosInstance.post('/questions/generate', criteria);
  return response.data;
};

export const fetchQuestions = async (interviewId) => {
  const response = await axiosInstance.get(`/questions/${interviewId}`);
  return response.data;
};

export const updateQuestion = async (questionId, questionData) => {
  const response = await axiosInstance.put(`/questions/${questionId}`, questionData);
  return response.data;
};
