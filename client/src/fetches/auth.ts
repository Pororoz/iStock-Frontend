import axios, { AxiosResponse } from 'axios';
import { ApiResponse } from '@type/api.type';

interface LoginType {
  username: string;
  password: string;
}

export interface AuthType {
  username: string;
  rolename: string;
}

export const login = async (userInfo: LoginType): Promise<AxiosResponse<ApiResponse<AuthType>, any>> => {
  return await axios.post<ApiResponse<AuthType>>('/api/v1/auth/login', userInfo);
};

export const logout = async (): Promise<AxiosResponse<ApiResponse<null>, any>> => {
  return await axios.post<ApiResponse<null>>('/api/v1/auth/logout');
};
