import { toast } from 'react-toastify';

export interface ErrorResponse {
  status: string;
  statusText: string;
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
