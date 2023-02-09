import AccountTable from '@components/Tables/AccountTable';
import { ReactElement } from 'react';

const rows = [
  {
    username: '아이디',
    role: '관리자',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    username: '아이디',
    role: '관리자',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    username: '아이디2',
    role: '관리자',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

function AccountsPage(): ReactElement {
  return (
    <div>
      <AccountTable rows={rows} />
    </div>
  );
}

export default AccountsPage;
