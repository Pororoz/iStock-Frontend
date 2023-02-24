import { ReactElement } from 'react';
import TableColumn from '@type/table';
import ButtonColumn from '@components/Columns/ButtonColumn';
import NumberColumn from '@components/Columns/NumberColumn';
import TextColumn from '@components/Columns/TextColumn';
import Table from '@components/Tables/Table';
import { PartDtoType } from '@type/dto.type';
import InputColumn from '@components/Columns/InputColumn';
import LinkColumn from '@components/Columns/LinkColumn';
import useMutate from '@hooks/useMutate';
import { deletePart } from '@fetches/part';
import { useConfirm } from '@utils/common';

const partTableFormat = (onUpdate: (row: PartDtoType) => void): Array<TableColumn<PartDtoType>> => [
  { key: 'No.', component: ({ i }) => <NumberColumn>{i + 1}</NumberColumn> },
  { key: '품명', component: ({ row }) => <TextColumn>{row.partName}</TextColumn> },
  { key: '규격', component: ({ row }) => <TextColumn>{row.spec}</TextColumn> },
  { key: '단가', component: ({ row }) => <NumberColumn>{row.price}</NumberColumn> },
  { key: '재고', component: ({ row }) => <NumberColumn>{row.stock}</NumberColumn> },
  {
    key: '입고(출고)',
    component: ({ row }) => (
      <InputColumn
        onSubmit={(input: number) => {
          console.log(`produce ${input} ${row.partName}`);
        }}
      >
        {'입고(출고)'}
      </InputColumn>
    ),
  },
  { key: '구매', component: ({ row }) => <NumberColumn>{row.stock < 0 ? row.stock : 'N/A'}</NumberColumn> },
  {
    key: 'BOM',
    component: ({ row }) => {
      return <LinkColumn to={'/error'}>미구현</LinkColumn>;
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
      const { mutate } = useMutate({ key: 'part', action: deletePart(row.partId) });
      return (
        <ButtonColumn
          color="--color-red"
          onClick={() => {
            useConfirm({
              onConfirm: () => {
                mutate({});
              },
              onCancel: () => {},
              message: `${row.partName}를 삭제하시겠습니까?`,
            });
          }}
        >
          삭제
        </ButtonColumn>
      );
    },
  },
];

export default function PartTable({
  rows,
  onUpdate,
}: {
  rows: PartDtoType[];
  onUpdate: (row: PartDtoType) => void;
}): ReactElement {
  return <Table rows={rows} format={partTableFormat(onUpdate)} />;
}
