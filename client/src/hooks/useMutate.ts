import { ErrorResponse } from '@utils/common';
import { AxiosResponse } from 'axios';
import { UseMutateAsyncFunction, UseMutateFunction, useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

interface MutationType {
  mutate: UseMutateFunction<AxiosResponse, { response: ErrorResponse }, any, unknown>;
  mutateAsync: UseMutateAsyncFunction<{ data: any }, { response: ErrorResponse }, void, unknown>;
}

interface MutationParameterType {
  action: (parameter: any) => Promise<AxiosResponse<any>>;
  key: string;
}

const ERROR_MESSAGE = {
  '400': '형식에 맞지 않는 ID 입니다.',
  '404': '해당 아이디에 맞는 유저를 찾을 수 없습니다.',
};

const handleOnError = ({ response }: { response: ErrorResponse }): void => {
  const { status } = response;
  toast.error(ERROR_MESSAGE[status as keyof typeof ERROR_MESSAGE]);
};

const useMutate = ({ action, key }: MutationParameterType): MutationType => {
  const queryClient = useQueryClient();

  const invalidate = async (key: string): Promise<void> => {
    await queryClient.invalidateQueries(key);
  };

  const { mutate, mutateAsync } = useMutation(action, {
    onSuccess: async () => {
      toast('완료되었습니다.');
      await invalidate(key);
    },
    onError: handleOnError,
  });

  return { mutate, mutateAsync };
};

export default useMutate;
