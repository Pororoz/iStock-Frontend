import { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import Table from '@components/Table';
import { ErrorResponse } from '@utils/common';
import { getUsers, createUser, deleteUser } from '@utils/useAccounts';
import useMutate from '@hooks/useMutate';

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
  const { data, isLoading } = useQuery('users', getUsers, {
    onError: handleOnError,
  });

  const userParameter = { key: 'users' };
  const createMutate = useMutate({ ...userParameter, action: createUser });
  const deleteMutate = useMutate({ ...userParameter, action: deleteUser });

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
