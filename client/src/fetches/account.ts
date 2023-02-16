import { AccountDtoType, AccountServerDtoType } from '@type/dto.type';
import axios, { AxiosResponse } from 'axios';

export interface AccountResponse<T> {
  status: number;
  message?: string;
  data: T;
}

interface AccountInfoData {
  totalPages: number;
  totalElements: number;
  currentSize: number;
  first: boolean;
  last: boolean;
  contents: AccountServerDtoType[];
}

interface AccountType {
  userId?: number;
  roleName?: string;
  username?: string;
}

export const getUsers = async (): Promise<AxiosResponse<AccountResponse<AccountInfoData>, any>> => {
  return await axios.get<AccountResponse<AccountInfoData>>('/users');
};

export const createUser = async (parameter: AccountType): Promise<AxiosResponse<AccountResponse<AccountType>>> => {
  return await axios.post<AccountResponse<AccountType>>('/users', parameter);
};

export const updateUser = async (parameter: AccountType): Promise<AxiosResponse<AccountResponse<AccountType>>> => {
  return await axios.put<AccountResponse<AccountType>>('/users', parameter);
};

export const deleteUser = async (id: number): Promise<AxiosResponse<AccountResponse<AccountType>>> => {
  return await axios.delete<AccountResponse<AccountType>>(`/users/${id === undefined ? '' : id.toString()}`);
};

export const transformData = (data: AxiosResponse<AccountResponse<AccountInfoData>>): AccountDtoType[] => {
  const newData = data.data.data.contents.map((elem: AccountServerDtoType) => {
    return { ...elem, createdAt: new Date(elem.createdAt), updatedAt: new Date(elem.updatedAt) };
  });
  return newData;
};
