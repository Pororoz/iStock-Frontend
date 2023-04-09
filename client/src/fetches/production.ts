import axios, { AxiosResponse } from 'axios';
import { ApiResponse } from '@type/api.type';

interface produceProductDto {
  quantity: number;
}

export const produceProduct = (productId: number) => {
  return async (parameter: produceProductDto): Promise<AxiosResponse<ApiResponse<produceProductDto>>> => {
    return await axios.post<ApiResponse<produceProductDto>>(
      `/api/v1/production/products/${productId}/waiting`,
      parameter,
    );
  };
};

export const confirmProductIo = async (productId: number): Promise<AxiosResponse<ApiResponse<produceProductDto>>> => {
  return await axios.post<ApiResponse<produceProductDto>>(`/api/v1/production/products/${productId}/confirm`);
};

export const cancelProductIo = async (productId: number): Promise<AxiosResponse<ApiResponse<produceProductDto>>> => {
  return await axios.post<ApiResponse<produceProductDto>>(`/api/v1/production/products/${productId}/cancel`);
};
