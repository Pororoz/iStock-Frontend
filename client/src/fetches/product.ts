import { ProductDbType } from '@type/db.type';
import axios, { AxiosResponse } from 'axios';
import { ApiData, ApiResponse } from '@type/api.type';

export const getProduct = (categoryId: number) => {
  return async (): Promise<AxiosResponse<ApiResponse<ApiData<ProductDbType[]>>, any>> => {
    return await axios.get<ApiResponse<ApiData<ProductDbType[]>>>(`/products?category-id=${categoryId}`);
  };
};

interface CreateProductDto {
  productName: string;
  productNumber: string;
  codeNumber: string;
  stock: number;
  companyName: string;
  categoryId: number;
}

export const createProduct = async (
  parameter: CreateProductDto,
): Promise<AxiosResponse<ApiResponse<CreateProductDto>>> => {
  return await axios.post<ApiResponse<CreateProductDto>>('/products', parameter);
};
