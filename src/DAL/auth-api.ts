import axios from 'axios';

import { LoginParamsType, ResponseType } from './todolist-api';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.1',
  headers: {
    'API-KEY': 'd6a9965b-9508-4ee9-9d27-31daa8d146f5',
  },
});

export const authAPI = {
  me() {
    return instance.get<ResponseType<AuthMeResponseType>>('/auth/me');
  },
  login(data: LoginParamsType) {
    return instance.post<ResponseType<{ userId: number }>>('/auth/login', data);
  },
  logout() {
    return instance.delete<ResponseType>('/auth/login');
  },
};

type AuthMeResponseType = {
  id: number;
  email: string;
  login: string;
};
