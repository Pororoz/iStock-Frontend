import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TableColumn from '../../types/table';
import ButtonColumn from './ButtonColumn';
import NumberColumn from './NumberColumn';
import TextColumn from './TextColumn';
import Table from '@components/Table/Table';
import { ProductData } from '@type/data';
import InputColumn from './InputColumn';

const productTableFormat: Array<TableColumn<ProductData>> = [
  { key: 'No.', component: ({ i }) => <NumberColumn>{i + 1}</NumberColumn> },
  { key: '품명', component: ({ row }) => <TextColumn>{row.name}</TextColumn> },
  { key: '품번', component: ({ row }) => <TextColumn>{row.number}</TextColumn> },
  { key: '거래처 이름', component: ({ row }) => <TextColumn>{row.companyName}</TextColumn> },
  { key: '코드번호', component: ({ row }) => <TextColumn>{row.codeNumber}</TextColumn> },
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
  {
    key: 'SUB ASSY',
    component: ({ row }) => <TextColumn>구현필요</TextColumn>,
  },
  {
    key: '사급자재',
    component: ({ row }) => <TextColumn>구현필요</TextColumn>,
  },
  {
    key: 'BOM',
    component: ({ row }) => {
      const { pathname } = useLocation();
      return (
        <ButtonColumn
          color="--color-blue"
          onClick={() => {
            console.log(`open the BOM of ${row.productId}`);
          }}
        >
          <Link to={`${pathname}/${row.productId}`}>BOM</Link>
        </ButtonColumn>
      );
    },
  },
  {
    key: 'Log',
    component: ({ row }) => {
      const { pathname } = useLocation();
      return (
        <ButtonColumn
          color="--color-blue"
          onClick={() => {
            console.log(`open the Log of ${row.productId}`);
          }}
        >
          <Link to={`${pathname}/${row.productId}/log`}>Log</Link>
        </ButtonColumn>
      );
    },
  },
  {
    key: '수정',
    component: ({ row }) => (
      <ButtonColumn
        color="--color-blue"
        onClick={() => {
          console.log(`update ${row.productId}`);
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
          console.log(`delete ${row.productId}`);
        }}
      >
        삭제
      </ButtonColumn>
    ),
  },
];

export default function ProductTable({ rows }: { rows: ProductData[] }): ReactElement {
  return <Table rows={rows} format={productTableFormat} />;
}
