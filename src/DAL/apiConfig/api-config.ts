import axios from 'axios';

export const apiConfig = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    // @ts-ignore
    'API-KEY': process.env.REACT_APP_API_KEY,
  },
});
