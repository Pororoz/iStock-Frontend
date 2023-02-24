import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { getCategory } from '@fetches/category';
import { ApiData, ApiResponse } from '@type/api.type';
import { ClientDtoType } from '@type/dto.type';
export interface ErrorResponse {
  status: string;
  statusText: string;
  data: ErrorData | '';
}
export interface ErrorData {
  status: string | number;
  message?: string;
}

interface UseConfirm {
  onConfirm: () => void;
  onCancel?: () => void;
  message?: string;
}

export interface CustomError<T = unknown, D = any> extends Error {
  code?: string;
  response?: AxiosResponse<T, D>;
}

export const CLIENT_ERROR_DATA: ErrorData = {
  status: 'CLIENT_ERROR',
  message: '클라이언트 오류, 관리자에게 문의하시거나 잠시후에 이용해주세요.',
};
export const SERVER_ERROR_DATA: ErrorData = {
  status: 'SERVER_ERROR',
  message: '서버 오류, 관리자에게 문의하시거나 잠시후에 이용해주세요.',
};

export const toastErrorMessage = (error: CustomError): void => {
  const errorData = generateErrorObject(error);
  toast.error(errorData.message);
};

export const generateErrorObject = ({ response }: { response?: AxiosResponse }): ErrorData => {
  if (response === undefined) return CLIENT_ERROR_DATA;
  return response.data === '' ? SERVER_ERROR_DATA : response.data;
};

export const useConfirm = ({
  onConfirm = () => {},
  onCancel = () => {},
  message = '진행하시겠습니까?',
}: UseConfirm): void => {
  if (window.confirm(message)) onConfirm();
  else onCancel();
};

export const checkRequired = (title: string, target: string): string => {
  return target === '' ? `${title}는(은) 필수값입니다.` : '';
};

export const checkLength = (title: string, target: string, min: number, max: number): string => {
  return target.length > max || target.length < min ? `${title}는(은) ${min}자 ~ ${max}자여야 합니다` : '';
};

export const checkEmpty = (value: string | undefined | null): boolean => {
  return value === '' || value === undefined || value === null;
};

export const checkAuthState = async (): Promise<boolean> => {
  // 임의로 Category GET요청으로 사용자 인증
  const authState = getCategory()
    .then(() => true)
    .catch((err) => {
      toast.error(err);
      return false;
    });
  return await authState;
};
interface TimeInString {
  createdAt: string;
  updatedAt: string;
}

export const convertStringToDate = <T extends TimeInString>(
  data: AxiosResponse<ApiResponse<ApiData<T[]>>>,
): Array<ClientDtoType<T>> => {
  const newData = data.data.data.contents.map((elem: T) => {
    return { ...elem, createdAt: new Date(elem.createdAt), updatedAt: new Date(elem.updatedAt) };
  });
  return newData;
};
