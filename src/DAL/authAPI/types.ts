export type LoginParamsType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha?: string;
};

export type AuthMeResponseType = {
  id: number;
  email: string;
  login: string;
};
