import axios from 'axios';

export const apiConfig = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.1',
});
