import { toast } from 'react-toastify';

export interface ErrorResponse {
  status: string;
  statusText: string;
}

interface UseConfirm {
  onConfirm: () => void;
  onCancel?: () => void;
  message?: string;
}

export const ERROR_MESSAGE = {
  '204': 'NO CONTENTS',
  '400': '형식에 맞지 않는 ID 입니다.',
  '401': 'id, password를 확인하세요.',
  '404': '해당 아이디에 맞는 유저를 찾을 수 없습니다.',
};

export const handleOnError = ({ response }: { response: ErrorResponse }): void => {
  const { status } = response;
  toast.error(ERROR_MESSAGE[status as keyof typeof ERROR_MESSAGE]);
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
