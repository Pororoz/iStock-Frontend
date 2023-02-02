import axios, { AxiosResponse } from 'axios';

export interface AccountResponse {
  status: number;
  message?: string;
  data: any;
}

interface AccountType {
  id?: number;
  username?: string;
  password?: string;
  roleName?: string;
}

export const getUsers = async (): Promise<AxiosResponse<AccountResponse, any>> => {
  return await axios.get<AccountResponse>('/users');
};

export const createUser = async (parameter: AccountType): Promise<AxiosResponse<AccountResponse, any>> => {
  return await axios.post<AccountResponse>('/users', parameter);
};

export const updateUser = async (parameter: AccountType): Promise<AxiosResponse<AccountResponse, any>> => {
  return await axios.put<AccountResponse>('/users', parameter);
};

export const deleteUser = async (id: string): Promise<AxiosResponse<AccountResponse, any>> => {
  return await axios.delete<AccountResponse>(`/users/${id === undefined ? '' : id.toString()}`);
};
