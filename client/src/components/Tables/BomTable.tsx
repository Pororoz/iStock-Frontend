import { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import ButtonColumn from '@components/Columns/ButtonColumn';
import NumberColumn from '@components//Columns/NumberColumn';
import TextColumn from '@components//Columns/TextColumn';
import Table from '@components/Tables/Table';
import InputColumn from '@components/Columns/InputColumn';
import LinkColumn from '@components/Columns/LinkColumn';
import { BomDtoType } from '@type/dto.type';
import TableColumn from '@type/table';

const bomTableFormat: Array<TableColumn<BomDtoType>> = [
  { key: 'No.', component: ({ i }) => <NumberColumn>{i + 1}</NumberColumn> },
  { key: '소요량', component: ({ row }) => <TextColumn>{row.quantity}</TextColumn> },
  { key: 'Location No.', component: ({ row }) => <TextColumn>{row.locationNumber}</TextColumn> },
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
  { key: '구매', component: ({ row }) => <NumberColumn>{row.stock < 0 ? row.stock : 'N/A'}</NumberColumn> },
  { key: '코드번호', component: ({ row }) => <TextColumn>{row.codeNumber}</TextColumn> },
  { key: '비고', component: ({ row }) => <TextColumn>{row.memo}</TextColumn> },
  {
    key: 'Log',
    component: ({ row }) => {
      const { pathname } = useLocation();
      return <LinkColumn to={`${pathname}/log`}>Log</LinkColumn>;
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

export default function BomTable({ rows }: { rows: BomDtoType[] }): ReactElement {
  return <Table rows={rows} format={bomTableFormat} />;
}
