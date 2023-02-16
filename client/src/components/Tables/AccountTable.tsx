import { ReactElement } from 'react';
import TableColumn from '@type/table';
import ButtonColumn from '@components/Columns/ButtonColumn';
import NumberColumn from '@components/Columns/NumberColumn';
import TextColumn from '@components/Columns/TextColumn';

import useMutate from '@hooks/useMutate';
import { deleteUser } from '@utils/useAccounts';

import Table from '@components/Tables/Table';
import { AccountDtoType } from '@type/dto.type';
import { useConfirm } from '@utils/common';

interface ParameterType {
  rows: AccountDtoType[];
  onUpdate: (row: AccountDtoType) => void;
}

const getAccountTableFormat = (onUpdate: (row: AccountDtoType) => void): Array<TableColumn<AccountDtoType>> => {
  return [
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
            onUpdate(row);
          }}
        >
          수정
        </ButtonColumn>
      ),
    },
    {
      key: '삭제',
      component: ({ row }) => {
        const { mutate } = useMutate({ key: 'users', action: deleteUser });

        return (
          <ButtonColumn
            color="--color-red"
            onClick={() => {
              useConfirm({
                message: '삭제하시겠습니까?',
                onConfirm: () => {
                  mutate(row.userId);
                },
              });
            }}
          >
            삭제
          </ButtonColumn>
        );
      },
    },
  ];
};

export default function AccountTable({ rows, onUpdate }: ParameterType): ReactElement {
  return <Table rows={rows} format={getAccountTableFormat(onUpdate)} />;
}
