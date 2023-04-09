import { ReactElement } from 'react';
import ButtonColumn from '@components/Columns/ButtonColumn';
import NumberColumn from '@components/Columns/NumberColumn';
import TextColumn from '@components/Columns/TextColumn';
import Table from '@components/Tables/Table';
import { getIoStatus } from '@utils/getIoStatus';
import { ProductIoDtoType } from '@type/dto.type';
import { ProductIoStatus } from '@type/io';
import TableColumn from '@type/table';
import { cancelProductIo, confirmProductIo } from '@fetches/production';
import useMutate from '@hooks/useMutate';

const calcDisabledProps = (status: ProductIoStatus): boolean => {
  return getIoStatus(status) !== '대기';
};

const productIoTableFormat: Array<TableColumn<ProductIoDtoType>> = [
  { key: 'No.', component: ({ i }) => <NumberColumn>{i + 1}</NumberColumn> },
  { key: '수정일', component: ({ row }) => <TextColumn>{row.updatedAt.toLocaleDateString()}</TextColumn> },
  { key: '변동량', component: ({ row }) => <TextColumn>{row.quantity}</TextColumn> },
  { key: '입고', component: ({ row }) => <TextColumn>{row.quantity >= 0 ? row.quantity : ''}</TextColumn> },
  { key: '출고', component: ({ row }) => <TextColumn>{row.quantity < 0 ? row.quantity : ''}</TextColumn> },
  { key: '상태', component: ({ row }) => <TextColumn>{row.status}</TextColumn> },
  {
    key: '확정',
    component: ({ row }) => {
      const { mutate } = useMutate({ key: 'productIo', action: async () => await confirmProductIo(row.productIoId) });
      return (
        <ButtonColumn
          color="--color-blue"
          disabled={calcDisabledProps(row.status)}
          onClick={() => {
            mutate({});
          }}
        >
          확정
        </ButtonColumn>
      );
    },
  },
  {
    key: '취소',
    component: ({ row }) => {
      const { mutate } = useMutate({ key: 'productIo', action: async () => await cancelProductIo(row.productIoId) });
      return (
        <ButtonColumn
          color="--color-red"
          disabled={calcDisabledProps(row.status)}
          onClick={() => {
            mutate({});
          }}
        >
          취소
        </ButtonColumn>
      );
    },
  },
];

export default function ProductIoTable({ rows }: { rows: ProductIoDtoType[] }): ReactElement {
  return <Table rows={rows} format={productIoTableFormat} />;
}
