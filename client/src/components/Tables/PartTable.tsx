import { ReactElement } from 'react';
import TableColumn from '@type/table';
import ButtonColumn from '@components/Columns/ButtonColumn';
import NumberColumn from '@components/Columns/NumberColumn';
import TextColumn from '@components/Columns/TextColumn';
import Table from '@components/Tables/Table';
import { PartDtoType } from '@type/dto.type';
import InputColumn from '@components/Columns/InputColumn';
import { useLocation } from 'react-router-dom';
import LinkColumn from '@components/Columns/LinkColumn';

const partTableFormat: Array<TableColumn<PartDtoType>> = [
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
      return <LinkColumn to={`${pathname}/log`}>조회</LinkColumn>;
    },
  },
  {
    key: 'Log',
    component: ({ row }) => {
      return <LinkColumn to={`/parts/${row.partId}/log`}>Log</LinkColumn>;
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

export default function PartTable({ rows }: { rows: PartDtoType[] }): ReactElement {
  return <Table rows={rows} format={partTableFormat} />;
}
