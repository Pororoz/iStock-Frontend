import { BomDbType, PartDbType } from '@type/db.type';
import axios, { AxiosResponse } from 'axios';
import { ApiData, ApiResponse } from '@type/api.type';
import { BomDtoType } from '@type/dto.type';

export const getBom = (productId: number) => {
  return async (): Promise<
    AxiosResponse<ApiResponse<ApiData<Array<BomDbType & Omit<PartDbType, 'createdAt' | 'updatedAt'>>>>, any>
  > => {
    return await axios.get<ApiResponse<ApiData<Array<BomDbType & Omit<PartDbType, 'createdAt' | 'updatedAt'>>>>>(
      `/api/v1/bom?product-id=${productId}`,
    );
  };
};

type CreateBomDto = Omit<BomDbType, 'bomId' | 'createdAt' | 'updatedAt'>;

export const createBom = async (parameter: CreateBomDto): Promise<AxiosResponse<ApiResponse<CreateBomDto>>> => {
  return await axios.post<ApiResponse<CreateBomDto>>('/api/v1/bom', parameter);
};

type UpdateBomDto = Omit<BomDbType, 'createdAt' | 'updatedAt'>;

export const updateBom = async (parameter: UpdateBomDto): Promise<AxiosResponse<ApiResponse<UpdateBomDto>>> => {
  return await axios.post<ApiResponse<UpdateBomDto>>('/api/v1/bom', parameter);
};

export const deleteBom = (id: number): (() => Promise<AxiosResponse<ApiResponse<BomDtoType>, any>>) => {
  return async () => await axios.delete<ApiResponse<BomDtoType>>(`/api/v1/products/${id.toString()}`);
};
