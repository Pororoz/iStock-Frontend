import { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import ButtonColumn from '@components/Columns/ButtonColumn';
import NumberColumn from '@components//Columns/NumberColumn';
import TextColumn from '@components//Columns/TextColumn';
import Table from '@components/Tables/Table';
import InputColumn from '@components/Columns/InputColumn';
import LinkColumn from '@components/Columns/LinkColumn';
import { useConfirm } from '@utils/common';
import { deleteBom } from '@fetches/bom';
import useMutate from '@hooks/useMutate';
import { BomDtoType } from '@type/dto.type';
import TableColumn from '@type/table';

const bomTableFormat = (onUpdate: (row: BomDtoType) => void): Array<TableColumn<BomDtoType>> => [
  { key: 'No.', component: ({ i }) => <NumberColumn>{i + 1}</NumberColumn> },
  { key: '소요량', component: ({ row }) => <TextColumn>{row.quantity}</TextColumn> },
  { key: 'Location No.', component: ({ row }) => <TextColumn>{row.locationNumber}</TextColumn> },
  { key: '품명', component: ({ row }) => <TextColumn>{row.part?.partName}</TextColumn> },
  { key: '규격', component: ({ row }) => <TextColumn>{row.part?.spec}</TextColumn> },
  { key: '단가', component: ({ row }) => <NumberColumn>{row.part?.price}</NumberColumn> },
  { key: '재고', component: ({ row }) => <NumberColumn>{row.part?.stock}</NumberColumn> },
  {
    key: '입고(출고)',
    component: ({ row }) => (
      <InputColumn
        onSubmit={(input: number) => {
          console.log(`produce ${input} ${row.part?.partName ?? 'undefined'}`);
        }}
      >
        {'입고(출고)'}
      </InputColumn>
    ),
  },
  {
    key: '구매',
    component: ({ row }) => (
      <NumberColumn>{row.part != null ? (row.part?.stock < 0 ? row.part?.stock : 'N/A') : 'N/A'}</NumberColumn>
    ),
  },
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
      const { mutate } = useMutate({ key: 'bom', action: deleteBom(row.bomId) });
      return (
        <ButtonColumn
          color="--color-red"
          onClick={() => {
            useConfirm({
              onConfirm: () => {
                mutate({});
              },
              onCancel: () => {},
              message: `${row.bomId}를 삭제하시겠습니까?`,
            });
          }}
        >
          삭제
        </ButtonColumn>
      );
    },
  },
];

export default function BomTable({
  rows,
  onUpdate,
}: {
  rows: BomDtoType[];
  onUpdate: (row: BomDtoType) => void;
}): ReactElement {
  return <Table rows={rows} format={bomTableFormat(onUpdate)} />;
}
