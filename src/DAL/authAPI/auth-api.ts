import { AuthMeResponseType, LoginParamsType } from './types';

import { ResponseType } from 'common/types/ResponseType';
import { apiConfig } from 'DAL';

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
