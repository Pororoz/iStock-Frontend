import axios, { AxiosResponse } from 'axios';
import { ProductDbType } from '@type/db.type';
import { ApiData, ApiResponse } from '@type/api.type';
import { ProductDtoType } from '@type/dto.type';

export const getProduct = (categoryId: number) => {
  return async (): Promise<AxiosResponse<ApiResponse<ApiData<ProductDbType[]>>, any>> => {
    return await axios.get<ApiResponse<ApiData<ProductDbType[]>>>(
      `/api/v1/products/with/subassy?category-id=${categoryId}`,
    );
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
  return await axios.post<ApiResponse<CreateProductDto>>('/api/v1/products', parameter);
};

type UpdateProductDto = CreateProductDto & { productId: number };

export const updateProduct = async (
  parameter: UpdateProductDto,
): Promise<AxiosResponse<ApiResponse<UpdateProductDto>>> => {
  return await axios.put<ApiResponse<UpdateProductDto>>('/api/v1/products', parameter);
};

export const deleteProduct = (id: number): (() => Promise<AxiosResponse<ApiResponse<ProductDtoType>, any>>) => {
  return async () => await axios.delete<ApiResponse<ProductDtoType>>(`/api/v1/products/${id.toString()}`);
};
