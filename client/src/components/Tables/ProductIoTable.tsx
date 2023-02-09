import { ReactElement } from 'react';
import TableColumn from '../../types/table';
import ButtonColumn from '../Columns/ButtonColumn';
import NumberColumn from '../Columns/NumberColumn';
import TextColumn from '../Columns/TextColumn';
import Table from '@components/Tables/Table';
import { ProductIoData } from '@type/data';
import LinkColumn from '../Columns/LinkColumn';

const productIoTableFormat: Array<TableColumn<ProductIoData>> = [
  { key: 'No.', component: ({ i }) => <NumberColumn>{i + 1}</NumberColumn> },
  { key: '수정일', component: ({ row }) => <TextColumn>{row.updatedAt.toLocaleDateString()}</TextColumn> },
  { key: '변동량', component: ({ row }) => <TextColumn>{row.quantity}</TextColumn> },
  { key: '입고', component: ({ row }) => <TextColumn>{row.quantity >= 0 ? row.quantity : ''}</TextColumn> },
  { key: '출고', component: ({ row }) => <TextColumn>{row.quantity < 0 ? row.quantity : ''}</TextColumn> },
  {
    key: '비고',
    component: ({ row }) => <LinkColumn to={'/part'}>{row.productId}</LinkColumn>,
  },
  {
    key: '확정',
    component: ({ row }) => (
      <ButtonColumn
        color="--color-dark-gray"
        onClick={() => {
          console.log(`delete ${row.productIoId}`);
        }}
      >
        확정
      </ButtonColumn>
    ),
  },
];

export default function ProductIoTable({ rows }: { rows: ProductIoData[] }): ReactElement {
  return <Table rows={rows} format={productIoTableFormat} />;
}
