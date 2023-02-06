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
  { key: 'No.', component: (row: AccountData, i: number) => <NumberColumn key="No.">{i + 1}</NumberColumn> },
  { key: 'ID', component: (row: AccountData) => <TextColumn key="ID">{row.username}</TextColumn> },
  { key: '역할', component: (row: AccountData) => <TextColumn key="역할">{row.role}</TextColumn> },
  {
    key: '생성일',
    component: (row: AccountData) => <TextColumn key="생성일">{row.createdAt.toLocaleDateString()}</TextColumn>,
  },
  {
    key: '수정일',
    component: (row: AccountData) => <TextColumn key="수정일">{row.updatedAt.toLocaleDateString()}</TextColumn>,
  },
  {
    key: '수정',
    component: (row: AccountData) => (
      <ButtonColumn
        key="수정"
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
    component: (row: AccountData) => (
      <ButtonColumn
        key="삭제"
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

const rows: AccountData[] = [
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
];

export default function AccountTable(): ReactElement {
  return <Table rows={rows} format={accountTableFormat} />;
}
