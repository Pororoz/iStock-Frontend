import { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import TableColumn from '@type/table';
import ButtonColumn from '@components/Columns/ButtonColumn';
import NumberColumn from '@components/Columns/NumberColumn';
import TextColumn from '@components/Columns/TextColumn';
import Table from '@components/Tables/Table';
import { ProductDtoType } from '@type/dto.type';
import InputColumn from '@components/Columns/InputColumn';
import LinkColumn from '@components/Columns/LinkColumn';

const productTableFormat: Array<TableColumn<ProductDtoType>> = [
  { key: 'No.', component: ({ i }) => <NumberColumn>{i + 1}</NumberColumn> },
  { key: '품명', component: ({ row }) => <TextColumn>{row.productName}</TextColumn> },
  { key: '품번', component: ({ row }) => <TextColumn>{row.productNumber}</TextColumn> },
  { key: '거래처 이름', component: ({ row }) => <TextColumn>{row.companyName}</TextColumn> },
  { key: '코드번호', component: ({ row }) => <TextColumn>{row.codeNumber}</TextColumn> },
  { key: '재고', component: ({ row }) => <NumberColumn>{row.stock}</NumberColumn> },
  {
    key: '입고(출고)',
    component: ({ row }) => (
      <InputColumn
        onSubmit={(input: number) => {
          console.log(`produce ${input} ${row.productName}`);
        }}
      >
        {'입고(출고)'}
      </InputColumn>
    ),
  },
  {
    key: 'SUB ASSY',
    component: ({ row }) => (
      <TextColumn>{row.subAssy.map((el) => `${el.partName}(${el.stock})`).join(', ')}</TextColumn>
    ),
  },
  {
    key: 'BOM',
    component: ({ row }) => {
      const { pathname } = useLocation();
      return <LinkColumn to={`${pathname}/${row.productId}`}>BOM</LinkColumn>;
    },
  },
  {
    key: 'Log',
    component: ({ row }) => {
      const { pathname } = useLocation();
      return <LinkColumn to={`${pathname}/${row.productId}/log`}>Log</LinkColumn>;
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

export default function ProductTable({ rows }: { rows: ProductDtoType[] }): ReactElement {
  return <Table rows={rows} format={productTableFormat} />;
}
