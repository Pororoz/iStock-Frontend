import { ReactElement } from 'react';
import TableColumn from '../../types/table';
import ButtonColumn from './ButtonColumn';
import NumberColumn from './NumberColumn';
import TextColumn from './TextColumn';
import Table from '@components/Table/Table';
import { PartIoData } from '@type/data';
import LinkColumn from './LinkColumn';

const partIoTableFormat: Array<TableColumn<PartIoData>> = [
  { key: 'No.', component: ({ i }) => <NumberColumn>{i + 1}</NumberColumn> },
  { key: '수정일', component: ({ row }) => <TextColumn>{row.updatedAt.toLocaleDateString()}</TextColumn> },
  { key: '변동량', component: ({ row }) => <TextColumn>{row.quantity}</TextColumn> },
  { key: '입고', component: ({ row }) => <TextColumn>{row.quantity >= 0 ? row.quantity : ''}</TextColumn> },
  { key: '출고', component: ({ row }) => <TextColumn>{row.quantity < 0 ? row.quantity : ''}</TextColumn> },
  {
    key: '비고',
    component: ({ row }) => <LinkColumn to={'/part'}>{row.partId}</LinkColumn>,
  },
  {
    key: '거래처 이름',
    component: ({ row }) => <TextColumn>거래처명은 DB 어떤 항목에서 가져와야 하나요.</TextColumn>,
  },
  {
    key: '확정',
    component: ({ row }) => (
      <ButtonColumn
        color="--color-dark-gray"
        onClick={() => {
          console.log(`delete ${row.partIoId}`);
        }}
      >
        확정
      </ButtonColumn>
    ),
  },
];

export default function PartIoTable({ rows }: { rows: PartIoData[] }): ReactElement {
  return <Table rows={rows} format={partIoTableFormat} />;
}
