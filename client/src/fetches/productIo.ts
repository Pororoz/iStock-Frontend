import axios, { AxiosResponse } from 'axios';
import { ProductIoDbType } from '@type/db.type';
import { ApiData, ApiResponse } from '@type/api.type';

export const getProductIo = (productId: number) => {
  return async (): Promise<AxiosResponse<ApiResponse<ApiData<ProductIoDbType[]>>, any>> => {
    return await axios.get<ApiResponse<ApiData<ProductIoDbType[]>>>(`/api/v1/product-io?product-id=${productId}`);
  };
};
