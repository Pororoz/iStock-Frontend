import { ErrorResponse, handleOnError } from '@utils/common';
import { AxiosResponse } from 'axios';
import { UseMutateAsyncFunction, UseMutateFunction, useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

interface MutationType {
  mutate: UseMutateFunction<AxiosResponse, { response: ErrorResponse }, any, unknown>;
  mutateAsync: UseMutateAsyncFunction<{ data: any }, { response: ErrorResponse }, void, unknown>;
}

interface MutationParameterType {
  action: (parameter: any) => Promise<AxiosResponse<any>>;
  key?: string;
  callback?: (parameter: any) => Promise<void>;
  onSuccess?: () => void;
}

const useMutate = (parameter: MutationParameterType): MutationType => {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync } = useMutation(parameter.action, {
    onSuccess: async ({ data }) => {
      if (parameter.callback !== undefined) await parameter.callback(data);

      if (parameter.key !== undefined) {
        await queryClient.invalidateQueries(parameter.key);
        toast('완료되었습니다.');
      }

      if (parameter.onSuccess !== undefined) parameter.onSuccess();
    },
    onError: handleOnError,
  });

  return { mutate, mutateAsync };
};

export default useMutate;
