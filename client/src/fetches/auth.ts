import { ApiResponse } from '@type/api.type';
import axios, { AxiosResponse } from 'axios';

interface LoginType {
  username: string;
  password: string;
}

export interface AuthType {
  username: string;
  rolename: string;
}

export const login = async (userInfo: LoginType): Promise<AxiosResponse<ApiResponse<AuthType>, any>> => {
  return await axios.post<ApiResponse<AuthType>>('/auth/login', userInfo);
};

export const logout = async (): Promise<AxiosResponse<ApiResponse<null>, any>> => {
  return await axios.post<ApiResponse<null>>('/auth/logout');
};
