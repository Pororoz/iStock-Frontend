import axios, { AxiosResponse } from 'axios';
import { ApiResponse, ApiData } from '@type/api.type';
import { AccountDtoType } from '@type/dto.type';
import { AccountDbType } from '@type/db.type';

interface AccountRequestType {
  userId?: number;
  roleName?: string;
  username?: string;
}

export const getUsers = async (): Promise<AxiosResponse<ApiResponse<ApiData<AccountDbType[]>>>> => {
  return await axios.get<ApiResponse<ApiData<AccountDbType[]>>>('/users');
};

export const createUser = async (
  parameter: AccountRequestType,
): Promise<AxiosResponse<ApiResponse<AccountDtoType[]>>> => {
  return await axios.post<ApiResponse<AccountDtoType[]>>('/users', parameter);
};

export const updateUser = async (
  parameter: AccountRequestType,
): Promise<AxiosResponse<ApiResponse<AccountDtoType[]>>> => {
  return await axios.put<ApiResponse<AccountDtoType[]>>('/users', parameter);
};

export const deleteUser = async (id: string): Promise<AxiosResponse<ApiResponse<AccountDtoType[]>>> => {
  return await axios.delete<ApiResponse<AccountDtoType[]>>(`/users/${id === undefined ? '' : id.toString()}`);
};
