import { ProductDbType } from '@type/db.type';
import axios, { AxiosResponse } from 'axios';
import { ApiData, ApiResponse } from '@type/api.type';

export const getProduct = (categoryId: number) => {
  return async (): Promise<AxiosResponse<ApiResponse<ApiData<ProductDbType[]>>, any>> => {
    return await axios.get<ApiResponse<ApiData<ProductDbType[]>>>(`/products?category-id=${categoryId}`);
  };
};
