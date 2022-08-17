import { AuthMeResponseType, LoginParamsType } from './types';

import { apiConfig } from 'DAL';
import { ResponseType } from 'DAL/types';

export const authAPI = {
  me() {
    return apiConfig.get<ResponseType<AuthMeResponseType>>('/auth/me');
  },
  login(data: LoginParamsType) {
    return apiConfig.post<ResponseType<{ userId: number }>>('/auth/login', data);
  },
  logout() {
    return apiConfig.delete<ResponseType>('/auth/login');
  },
};
