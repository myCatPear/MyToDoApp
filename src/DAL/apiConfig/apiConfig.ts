import axios from 'axios';

export const apiConfig = axios.create({
  withCredentials: true,
  baseURL:
    process.env.REACT_APP_BASE_URL || 'https://social-network.samuraijs.com/api/1.1',
  headers: {
    'API-KEY': process.env.REACT_APP_API_KEY || 'd6a9965b-9508-4ee9-9d27-31daa8d146f5',
  },
});
