import { ReactElement } from 'react';
import TableColumn from '@type/table';
import ButtonColumn from '@components/Columns/ButtonColumn';
import NumberColumn from '@components/Columns/NumberColumn';
import TextColumn from '@components/Columns/TextColumn';
import Table from '@components/Tables/Table';
import { AccountDtoType } from '@type/dto.type';

const accountTableFormat: Array<TableColumn<AccountDtoType>> = [
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
        onClick={() => {
          console.log(`delete ${row.username}`);
        }}
      >
        삭제
      </ButtonColumn>
    ),
  },
];

export default function AccountTable({ rows }: { rows: AccountDtoType[] }): ReactElement {
  return <Table rows={rows} format={accountTableFormat} />;
}
