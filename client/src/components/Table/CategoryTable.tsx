import { ReactElement } from 'react';
import TableColumn from '../../types/table';
import ButtonColumn from './ButtonColumn';
import NumberColumn from './NumberColumn';
import Table from '@components/Table/Table';
import { CategoryData } from '@type/data';
import LinkColumn from './LinkColumn';

const categoryTableFormat: Array<TableColumn<CategoryData>> = [
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

export default function CategoryTable({ rows }: { rows: CategoryData[] }): ReactElement {
  return <Table rows={rows} format={categoryTableFormat} />;
}
