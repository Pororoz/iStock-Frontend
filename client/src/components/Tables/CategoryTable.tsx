import { ReactElement } from 'react';
import ButtonColumn from '@components/Columns/ButtonColumn';
import NumberColumn from '@components/Columns/NumberColumn';
import LinkColumn from '@components/Columns/LinkColumn';
import Table from '@components/Tables/Table';
import { deleteCategory } from '@fetches/category';
import useMutate from '@hooks/useMutate';
import { useConfirm } from '@utils/common';
import { CategoryDtoType } from '@type/dto.type';
import TableColumn from '@type/table';

const categoryTableFormat = (onUpdate: (row: CategoryDtoType) => void): Array<TableColumn<CategoryDtoType>> => [
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
      const { mutate } = useMutate({ key: 'category', action: deleteCategory(row.categoryId) });
      return (
        <ButtonColumn
          color="--color-red"
          onClick={() => {
            useConfirm({
              onConfirm: () => {
                mutate({});
              },
              onCancel: () => {},
              message: `${row.categoryName}를 삭제하시겠습니까?`,
            });
          }}
        >
          삭제
        </ButtonColumn>
      );
    },
  },
];

export default function CategoryTable({
  rows,
  onUpdate,
}: {
  rows: CategoryDtoType[];
  onUpdate: (row: CategoryDtoType) => void;
}): ReactElement {
  return <Table rows={rows} format={categoryTableFormat(onUpdate)} />;
}
