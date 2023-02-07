import { ReactElement } from 'react';
import TableColumn from './table.type';
import ButtonColumn from './ButtonColumn';
import NumberColumn from './NumberColumn';
import TextColumn from './TextColumn';
import Table from '@components/Table/Table';

interface AccountData {
  username: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

const accountTableFormat: Array<TableColumn<AccountData>> = [
  { key: 'No.', component: ({ i }) => <NumberColumn>{i + 1}</NumberColumn> },
  { key: 'ID', component: ({ row }) => <TextColumn>{row.username}</TextColumn> },
  { key: '역할', component: ({ row }) => <TextColumn>{row.role}</TextColumn> },
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
        onClick={() => {
          console.log(`delete ${row.username}`);
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
