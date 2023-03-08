import { ReactElement } from 'react';
import ButtonColumn from '@components/Columns/ButtonColumn';
import NumberColumn from '@components/Columns/NumberColumn';
import TextColumn from '@components/Columns/TextColumn';
import Table from '@components/Tables/Table';
import LinkColumn from '@components/Columns/LinkColumn';
import { getIoStatus } from '@utils/getIoStatus';
import { PartIoDtoType } from '@type/dto.type';
import TableColumn from '@type/table';
import { PartIoStatus } from '@type/io';

const calcDisabledProps = (status: PartIoStatus): boolean => {
  return getIoStatus(status) !== '대기';
};

const partIoTableFormat: Array<TableColumn<PartIoDtoType>> = [
  { key: 'No.', component: ({ i }) => <NumberColumn>{i + 1}</NumberColumn> },
  { key: '수정일', component: ({ row }) => <TextColumn>{row.updatedAt.toLocaleDateString()}</TextColumn> },
  { key: '변동량', component: ({ row }) => <TextColumn>{row.quantity}</TextColumn> },
  { key: '입고', component: ({ row }) => <TextColumn>{row.quantity >= 0 ? row.quantity : ''}</TextColumn> },
  { key: '출고', component: ({ row }) => <TextColumn>{row.quantity < 0 ? row.quantity : ''}</TextColumn> },
  { key: '상태', component: ({ row }) => <TextColumn>{row.status}</TextColumn> },
  {
    key: '비고',
    component: ({ row }) => <LinkColumn to={`/items/${row.categoryId}/${row.productId}/log`}>{row.name}</LinkColumn>,
  },
  {
    key: '거래처 이름',
    component: ({ row }) => <TextColumn>{row.companyName}</TextColumn>,
  },
  {
    key: '확정',
    component: ({ row }) => (
      <ButtonColumn
        color="--color-blue"
        disabled={calcDisabledProps(row.status)}
        onClick={() => {
          console.log(`confirm ${row.partIoId}`);
        }}
      >
        확정
      </ButtonColumn>
    ),
  },
  {
    key: '취소',
    component: ({ row }) => (
      <ButtonColumn
        color="--color-red"
        disabled={calcDisabledProps(row.status)}
        onClick={() => {
          console.log(`cancel ${row.partIoId}`);
        }}
      >
        취소
      </ButtonColumn>
    ),
  },
];

export default function PartIoTable({ rows }: { rows: PartIoDtoType[] }): ReactElement {
  return <Table rows={rows} format={partIoTableFormat} />;
}
