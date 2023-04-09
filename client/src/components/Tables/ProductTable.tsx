import { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import ButtonColumn from '@components/Columns/ButtonColumn';
import NumberColumn from '@components/Columns/NumberColumn';
import TextColumn from '@components/Columns/TextColumn';
import Table from '@components/Tables/Table';
import InputColumn from '@components/Columns/InputColumn';
import LinkColumn from '@components/Columns/LinkColumn';
import { deleteProduct } from '@fetches/product';
import useMutate from '@hooks/useMutate';
import { useConfirm } from '@utils/common';
import { ProductDtoType } from '@type/dto.type';
import TableColumn from '@type/table';
import { produceProduct } from '@fetches/production';

const productTableFormat = (onUpdate: (row: ProductDtoType) => void): Array<TableColumn<ProductDtoType>> => [
  { key: 'No.', component: ({ i }) => <NumberColumn>{i + 1}</NumberColumn> },
  { key: '품명', component: ({ row }) => <TextColumn>{row.productName}</TextColumn> },
  { key: '품번', component: ({ row }) => <TextColumn>{row.productNumber}</TextColumn> },
  { key: '거래처 이름', component: ({ row }) => <TextColumn>{row.companyName}</TextColumn> },
  { key: '코드번호', component: ({ row }) => <TextColumn>{row.codeNumber}</TextColumn> },
  { key: '재고', component: ({ row }) => <NumberColumn>{row.stock}</NumberColumn> },
  {
    key: '입고(출고)',
    component: ({ row }) => {
      const { mutate } = useMutate({ key: 'productIo', action: produceProduct(row.productId) });
      return (
        <InputColumn
          onSubmit={(input: number) => {
            mutate({ quantity: input });
          }}
        >
          {'입고(출고)'}
        </InputColumn>
      );
    },
  },
  {
    key: 'SUB ASSY',
    component: ({ row }) => (
      <TextColumn>{row.subAssy?.map((el) => `${el.partName}(${el.stock})`).join(', ')}</TextColumn>
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
      const { mutate } = useMutate({ key: 'product', action: deleteProduct(row.productId) });
      return (
        <ButtonColumn
          color="--color-red"
          onClick={() => {
            useConfirm({
              onConfirm: () => {
                mutate({});
              },
              onCancel: () => {},
              message: `${row.productName}를 삭제하시겠습니까?`,
            });
          }}
        >
          삭제
        </ButtonColumn>
      );
    },
  },
];

export default function ProductTable({
  rows,
  onUpdate,
}: {
  rows: ProductDtoType[];
  onUpdate: (row: ProductDtoType) => void;
}): ReactElement {
  return <Table rows={rows} format={productTableFormat(onUpdate)} />;
}
