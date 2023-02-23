import axios, { AxiosResponse } from 'axios';

export interface LoginResponse {
  status: number;
  message?: string;
  data: AuthType;
}

interface LoginType {
  username: string;
  password: string;
}

interface AuthType {
  username: string;
  rolename: string;
}

const login = async (userInfo: LoginType): Promise<AxiosResponse<LoginResponse, any>> => {
  return await axios.post<LoginResponse>('/auth/login', userInfo);
};

export default login;
