import { ReactElement } from 'react';
import TableColumn from '../../types/table';
import ButtonColumn from './ButtonColumn';
import NumberColumn from './NumberColumn';
import TextColumn from './TextColumn';
import Table from '@components/Table/Table';
import { PartData } from '@type/data';
import InputColumn from './InputColumn';
import { Link, useLocation } from 'react-router-dom';

const partTableFormat: Array<TableColumn<PartData>> = [
  { key: 'No.', component: ({ i }) => <NumberColumn>{i + 1}</NumberColumn> },
  { key: '품명', component: ({ row }) => <TextColumn>{row.name}</TextColumn> },
  { key: '규격', component: ({ row }) => <TextColumn>{row.spec}</TextColumn> },
  { key: '단가', component: ({ row }) => <NumberColumn>{row.price}</NumberColumn> },
  { key: '재고', component: ({ row }) => <NumberColumn>{row.stock}</NumberColumn> },
  {
    key: '입고(출고)',
    component: ({ row }) => (
      <InputColumn
        onSubmit={(input: number) => {
          console.log(`produce ${input} ${row.name}`);
        }}
      >
        {'입고(출고)'}
      </InputColumn>
    ),
  },
  { key: '구매', component: ({ row }) => <NumberColumn>{row.stock}</NumberColumn> },
  {
    key: 'BOM',
    component: ({ row }) => {
      const { pathname } = useLocation();
      return (
        <TextColumn>
          <Link to={`${pathname}/log`}>조회</Link>
        </TextColumn>
      );
    },
  },
  {
    key: 'Log',
    component: ({ row }) => {
      return (
        <TextColumn>
          <Link to={`/parts/${row.partId}/log`}>Log</Link>
        </TextColumn>
      );
    },
  },
  {
    key: '수정',
    component: ({ row }) => (
      <ButtonColumn
        color="--color-blue"
        onClick={() => {
          console.log(`update ${row.partId}`);
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
          console.log(`delete ${row.partId}`);
        }}
      >
        삭제
      </ButtonColumn>
    ),
  },
];

export default function PartTable({ rows }: { rows: PartData[] }): ReactElement {
  return <Table rows={rows} format={partTableFormat} />;
}
