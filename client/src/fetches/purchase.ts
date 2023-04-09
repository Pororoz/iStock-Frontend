import axios, { AxiosResponse } from 'axios';
import { ApiResponse } from '@type/api.type';

interface purchasePartDto {
  quantity: number;
}

export const purchasePart = (partId: number) => {
  return async (parameter: purchasePartDto): Promise<AxiosResponse<ApiResponse<purchasePartDto>>> => {
    return await axios.post<ApiResponse<purchasePartDto>>(`/api/v1/purchase/parts/${partId}/waiting`, parameter);
  };
};

export const confirmPartIo = async (partId: number): Promise<AxiosResponse<ApiResponse<purchasePartDto>>> => {
  return await axios.post<ApiResponse<purchasePartDto>>(`/api/v1/purchase/part-io/${partId}/confirm`);
};

export const cancelPartIo = async (partId: number): Promise<AxiosResponse<ApiResponse<purchasePartDto>>> => {
  return await axios.post<ApiResponse<purchasePartDto>>(`/api/v1/purchase/part-io/${partId}/cancel`);
};
