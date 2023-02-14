import { ReactElement } from 'react';
import TableColumn from '@type/table';
import ButtonColumn from '@components/Columns/ButtonColumn';
import NumberColumn from '@components/Columns/NumberColumn';
import LinkColumn from '@components/Columns/LinkColumn';
import Table from '@components/Tables/Table';
import useMutate from '@hooks/useMutate';
import { deleteCategory } from '@utils/useCategory';
import { useConfirm } from '@utils/common';
import { CategoryDtoType } from '@type/dto.type';

const categoryTableFormat: Array<TableColumn<CategoryDtoType>> = [
  { key: 'No.', component: ({ i }) => <NumberColumn>{i + 1}</NumberColumn> },
  {
    key: '카테고리 이름',
    component: ({ row }) => <LinkColumn to={`/items/${row.categoryId}`}>{row.categoryName}</LinkColumn>,
  },
  {
    key: '수정',
    component: ({ row }) => (
      <ButtonColumn
        color="--color-blue"
        onClick={() => {
          console.log(`update ${row.categoryId}`);
        }}
      >
        수정
      </ButtonColumn>
    ),
  },
  {
    key: '삭제',
    component: ({ row }) => {
      const deleteMutate = useMutate({ key: 'users', action: deleteCategory(row.categoryId) });
      return (
        <ButtonColumn
          color="--color-red"
          onClick={() => {
            useConfirm(
              () => {
                deleteMutate.mutate({});
              },
              () => {},
              `${row.categoryName}를 삭제하시겠습니까?`,
            );
          }}
        >
          삭제
        </ButtonColumn>
      );
    },
  },
];

export default function CategoryTable({ rows }: { rows: CategoryDtoType[] }): ReactElement {
  return <Table rows={rows} format={categoryTableFormat} />;
}
