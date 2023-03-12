import axios, { AxiosResponse } from 'axios';
import { PartIoDbType } from '@type/db.type';
import { ApiData, ApiResponse } from '@type/api.type';

export const getPartIo = (partId: number) => {
  return async (): Promise<AxiosResponse<ApiResponse<ApiData<PartIoDbType[]>>, any>> => {
    return await axios.get<ApiResponse<ApiData<PartIoDbType[]>>>(`/api/v1/part-io?part-id=${partId}`);
  };
};
