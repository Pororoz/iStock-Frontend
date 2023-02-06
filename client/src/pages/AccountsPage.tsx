import { ReactElement } from 'react';
import { useQuery } from 'react-query';

import Table from '@components/Table';
import { handleOnError } from '@utils/common';
import { getUsers, createUser, deleteUser } from '@utils/useAccounts';
import useMutate from '@hooks/useMutate';

const headers = ['No.', 'ID', '권한', '생성일', '수정일', '수정', '삭제'];
const rowKeys = ['No.', 'username', 'roleName', 'updatedAt', 'createdAt', '수정', '삭제'];

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
