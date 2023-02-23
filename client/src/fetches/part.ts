import axios, { AxiosResponse } from 'axios';
import { ApiData, ApiResponse } from '@type/api.type';
import { PartDbType } from '@type/db.type';
import { PartDtoType } from '@type/dto.type';

export const getPart = (partName: string) => {
  return async (): Promise<AxiosResponse<ApiResponse<ApiData<PartDbType[]>>, any>> => {
    return await axios.get<ApiResponse<ApiData<PartDbType[]>>>(`/parts?part-name=${partName}`);
  };
};

interface CreatePartDto {
  partName: string;
  spec: string;
  price: number;
  stock: number;
}

export const createPart = async (parameter: CreatePartDto): Promise<AxiosResponse<ApiResponse<CreatePartDto>>> => {
  return await axios.post<ApiResponse<CreatePartDto>>('/parts', parameter);
};

type UpdatePartDto = CreatePartDto & { partId: number };

export const updatePart = async (parameter: UpdatePartDto): Promise<AxiosResponse<ApiResponse<UpdatePartDto>>> => {
  return await axios.put<ApiResponse<UpdatePartDto>>('/parts', parameter);
};

export const deletePart = (id: number): (() => Promise<AxiosResponse<ApiResponse<PartDtoType>, any>>) => {
  return async () => await axios.delete<ApiResponse<PartDtoType>>(`/parts/${id.toString()}`);
};
