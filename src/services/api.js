import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
};

// Courses API
export const coursesAPI = {
  getAllCourses: () => api.get('/courses'),
  getCourse: (id) => api.get(`/courses/${id}`),
  getModule: (id) => api.get(`/courses/modules/${id}`),
  getLesson: (id) => api.get(`/courses/lessons/${id}`),
};

// Assessments API
export const assessmentsAPI = {
  getAllAssessments: (params) => api.get('/assessments', { params }),
  getAssessment: (id) => api.get(`/assessments/${id}`),
  submitAssessment: (id, data) => api.post(`/assessments/${id}/submit`, data),
  getAttemptResults: (assessmentId, attemptId) => 
    api.get(`/assessments/${assessmentId}/attempts/${attemptId}`),
};

// Progress API
export const progressAPI = {
  getProgress: () => api.get('/progress'),
  updateLessonProgress: (lessonId, data) => 
    api.post(`/progress/lessons/${lessonId}`, data),
  getAnalytics: () => api.get('/progress/analytics'),
};

export default api;
