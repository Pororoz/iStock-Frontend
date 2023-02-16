import axios, { AxiosResponse } from 'axios';
import { ApiData, ApiResponse } from '@type/api.type';
import { CategoryDbType } from '@type/db.type';
import { CategoryDtoType } from '@type/dto.type';

export const getCategory = async (): Promise<AxiosResponse<ApiResponse<ApiData<CategoryDbType[]>>, any>> => {
  return await axios.get<ApiResponse<ApiData<CategoryDbType[]>>>('/categories');
};

export const createCategory = async (
  parameter: CategoryDtoType,
): Promise<AxiosResponse<ApiResponse<CategoryDtoType>>> => {
  return await axios.post<ApiResponse<CategoryDtoType>>('/categories', parameter);
};

export const updateCategory = async (
  parameter: CategoryDtoType,
): Promise<AxiosResponse<ApiResponse<CategoryDtoType>>> => {
  return await axios.put<ApiResponse<CategoryDtoType>>('/categories', parameter);
};

export const deleteCategory = (id: number): (() => Promise<AxiosResponse<ApiResponse<CategoryDtoType>, any>>) => {
  return async () => await axios.delete<ApiResponse<CategoryDtoType>>(`/categories/${id.toString()}`);
};
