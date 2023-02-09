import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import TableColumn from '../../types/table';
import ButtonColumn from './ButtonColumn';
import NumberColumn from './NumberColumn';
import TextColumn from './TextColumn';
import Table from '@components/Table/Table';
import { CategoryData } from '@type/data';

const categoryTableFormat: Array<TableColumn<CategoryData>> = [
  { key: 'No.', component: ({ i }) => <NumberColumn>{i + 1}</NumberColumn> },
  {
    key: '카테고리 이름',
    component: ({ row }) => (
      <TextColumn>
        <Link to={`/items/${row.categoryId}`}>{row.name}</Link>
      </TextColumn>
    ),
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
