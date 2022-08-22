import { AuthMeResponseType, LoginParamsType } from './types';

import { ResponseType } from 'common/types/responseType/responseType';
import { apiConfig } from 'DAL';

export const authApi = {
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
