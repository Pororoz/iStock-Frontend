import axios, { AxiosResponse } from 'axios';
import { ApiData, ApiResponse } from '@type/api.type';
import { CategoryDbType } from '@type/db.type';
import { CategoryDtoType, ClientDtoType } from '@type/dto.type';

interface TimeInString {
  createdAt: string;
  updatedAt: string;
}

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

export const onSelect = <T extends TimeInString>(
  data: AxiosResponse<ApiResponse<ApiData<T[]>>>,
): Array<ClientDtoType<T>> => {
  const newData = data.data.data.contents.map((elem: T) => {
    return { ...elem, createdAt: new Date(elem.createdAt), updatedAt: new Date(elem.updatedAt) };
  });
  return newData;
};
