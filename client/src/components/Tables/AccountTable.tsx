import { ReactElement } from 'react';
import useMutate from '@hooks/useMutate';
import { deleteUser } from '@utils/useAccounts';
import TableColumn from '../../types/table';
import ButtonColumn from '../Columns/ButtonColumn';
import NumberColumn from '../Columns/NumberColumn';
import TextColumn from '../Columns/TextColumn';
import Table from '@components/Tables/Table';
import { AccountData } from '@type/data';

const accountTableFormat: Array<TableColumn<AccountData>> = [
  { key: 'No.', component: ({ i }) => <NumberColumn>{i + 1}</NumberColumn> },
  { key: 'ID', component: ({ row }) => <TextColumn>{row.username}</TextColumn> },
  { key: '역할', component: ({ row }) => <TextColumn>{row.roleName}</TextColumn> },
  {
    key: '생성일',
    component: ({ row }) => <TextColumn>{row.createdAt.toLocaleDateString()}</TextColumn>,
  },
  {
    key: '수정일',
    component: ({ row }) => <TextColumn>{row.updatedAt.toLocaleDateString()}</TextColumn>,
  },
  {
    key: '수정',
    component: ({ row }) => (
      <ButtonColumn
        color="--color-blue"
        onClick={() => {
          console.log(`update ${row.username}`);
        }}
      >
        수정
      </ButtonColumn>
    ),
  },
  {
    key: '삭제',
    component: ({ row }) => (
      <ButtonColumn
        color="--color-red"
        disabled
        onClick={() => {
          useMutate({ key: 'users', action: deleteUser }).mutate(row.userId);
        }}
      >
        삭제
      </ButtonColumn>
    ),
  },
];

export default function AccountTable({ rows }: { rows: AccountData[] }): ReactElement {
  return <Table rows={rows} format={accountTableFormat} />;
}
