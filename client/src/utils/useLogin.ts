import axios, { AxiosResponse } from 'axios';

interface LoginType {
  username: string;
  password: string;
}

interface LoginResponse {
  status: number;
  message?: string;
  data: AuthType;
}

interface AuthType {
  username: string;
  rolename: string;
}

const login = async (userInfo: LoginType): Promise<AxiosResponse<LoginResponse, any>> => {
  return await axios.post<LoginResponse>('/login', userInfo);
};

export default login;
