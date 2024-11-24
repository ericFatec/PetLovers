import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:32831',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;