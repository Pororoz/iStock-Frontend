import { ReactElement } from 'react';
import TableColumn from '@type/table';
import ButtonColumn from '@components/Columns/ButtonColumn';
import NumberColumn from '@components/Columns/NumberColumn';
import Table from '@components/Tables/Table';
import { CategoryDtoType } from '@type/dto.type';
import LinkColumn from '@components/Columns/LinkColumn';

const categoryTableFormat: Array<TableColumn<CategoryDtoType>> = [
  { key: 'No.', component: ({ i }) => <NumberColumn>{i + 1}</NumberColumn> },
  {
    key: '카테고리 이름',
    component: ({ row }) => <LinkColumn to={`/items/${row.categoryId}`}>{row.name}</LinkColumn>,
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
    component: ({ row }) => (
      <ButtonColumn
        color="--color-red"
        onClick={() => {
          console.log(`delete ${row.categoryId}`);
        }}
      >
        삭제
      </ButtonColumn>
    ),
  },
];

export default function CategoryTable({ rows }: { rows: CategoryDtoType[] }): ReactElement {
  return <Table rows={rows} format={categoryTableFormat} />;
}
