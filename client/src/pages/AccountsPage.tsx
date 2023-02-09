import { ReactElement } from 'react';
import { useQuery } from 'react-query';
import AccountTable from '@components/Table/AccountTable';
import { handleOnError } from '@utils/common';
import { getUsers, transformData } from '@utils/useAccounts';

function AccountsPage(): ReactElement {
  const { data, isLoading } = useQuery('users', getUsers, {
    onError: handleOnError,
    select: (data) => transformData(data),
  });

  return (
    <div>
      {isLoading ? <div>loading</div> : data !== undefined ? <AccountTable rows={data} /> : <div>dataundefined</div>}
    </div>
  );
}

export default AccountsPage;
