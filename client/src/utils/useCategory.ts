import { CategoryData } from '@type/data';
import axios, { AxiosResponse } from 'axios';
import { ApiData, ApiResponse } from './common';

interface ServerCategoryType {
  categoryId: number;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
}

interface CategoryType {
  categoryId?: number;
  categoryName?: string;
}

export const getCategory = async (): Promise<AxiosResponse<ApiResponse<ApiData<ServerCategoryType[]>>, any>> => {
  return await axios.get<ApiResponse<ApiData<ServerCategoryType[]>>>('/categories');
};

export const createCategory = async (parameter: CategoryType): Promise<AxiosResponse<ApiResponse<CategoryType>>> => {
  return await axios.post<ApiResponse<CategoryType>>('/categories', parameter);
};

export const updateCategory = async (parameter: CategoryType): Promise<AxiosResponse<ApiResponse<CategoryType>>> => {
  return await axios.put<ApiResponse<CategoryType>>('/categories', parameter);
};

export const deleteCategory = (id: number): (() => Promise<AxiosResponse<ApiResponse<CategoryType>, any>>) => {
  return async () => await axios.delete<ApiResponse<CategoryType>>(`/categories/${id.toString()}`);
};

export const onSelect = (data: AxiosResponse<ApiResponse<ApiData<ServerCategoryType[]>>>): CategoryData[] => {
  const newData = data.data.data.contents.map((elem: ServerCategoryType) => {
    return { ...elem, createdAt: new Date(elem.createdAt), updatedAt: new Date(elem.updatedAt) };
  });
  return newData;
};
