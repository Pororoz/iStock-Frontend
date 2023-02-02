import { ReactElement } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import Table from '@components/Table';
import { ErrorResponse } from '@utils/common';
import { getUsers, createUser, deleteUser } from '@utils/useAccounts';

const ERROR_MESSAGE = {
  '400': '형식에 맞지 않는 ID 입니다.',
  '404': '해당 아이디에 맞는 유저를 찾을 수 없습니다.',
};

const headers = ['No.', 'ID', '권한', '생성일', '수정일', '수정', '삭제'];
const rowKeys = ['No.', 'username', 'roleName', 'updatedAt', 'createdAt', '수정', '삭제'];

const handleOnError = ({ response }: { response: ErrorResponse }): void => {
  const { status } = response;
  toast.error(ERROR_MESSAGE[status as keyof typeof ERROR_MESSAGE]);
};

function AccountsPage(): ReactElement {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery('users', getUsers, {
    onError: handleOnError,
  });

  const createMutate = useMutation(createUser, {
    onSuccess: async ({ data }) => {
      toast.success('추가되었습니다.');
      await queryClient.invalidateQueries('users');
    },
    onError: handleOnError,
  });

  const deleteMutate = useMutation(deleteUser, {
    onSuccess: async ({ data }) => {
      toast.success('삭제되었습니다.');
      await queryClient.invalidateQueries('users');
    },
    onError: handleOnError,
  });

  return (
    <div>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <div>
          <Table
            rows={data?.data.data.contents}
            headers={headers}
            rowKeys={rowKeys}
            onEdit={createMutate.mutate}
            onDelete={deleteMutate.mutate}
          />
        </div>
      )}
    </div>
  );
}

export default AccountsPage;
