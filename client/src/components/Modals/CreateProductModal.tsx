import ModalInput from '@components/ModalInputs/ModalInput';
import { ReactElement, useState } from 'react';
import Modal from './Modal';
import { lengthValidator } from '@utils/common';
import Text from '@components/Text';
import useMutate from '@hooks/useMutate';
import { createCategory } from '@fetches/category';
import { useParams } from 'react-router-dom';

interface Props {
  onSubmit?: () => void;
  onClose?: () => void;
  onChange?: () => void;
}

interface RequestType {
  productName?: string;
  productNumber?: string;
  codeNumber?: string;
  stock?: number;
  companyName?: string;
  categoryId?: number;
}

export default function CreateProductModal({ onClose = () => {} }: Props): ReactElement {
  const { mutate } = useMutate({ key: 'products', action: createCategory, onSuccess: onClose });
  const { category } = useParams();
  const [value, setValue] = useState<RequestType>({ categoryId: parseInt(category as string) });

  return (
    <Modal
      onSubmit={() => {
        mutate({ categoryName: value });
        onClose();
      }}
      onClose={onClose}
    >
      <Text>제품 생성</Text>
      <ModalInput
        value={value.productName}
        title="품명"
        onChange={(event: any) => {
          setValue({ ...value, productName: event.target.value });
        }}
        validators={[lengthValidator('품명', 2, 100)]}
      />
      <ModalInput
        value={value.productNumber}
        title="품번"
        onChange={(event: any) => {
          setValue({ ...value, productNumber: event.target.value });
        }}
        validators={[lengthValidator('품번', 2, 100)]}
      />
      <ModalInput
        value={value.codeNumber}
        title="제품 코드"
        onChange={(event: any) => {
          setValue({ ...value, codeNumber: event.target.value });
        }}
        validators={[lengthValidator('제품 코드', 2, 100)]}
      />
      <ModalInput
        value={(value.stock ?? 0).toString()}
        title="재고"
        onChange={(event: any) => {
          setValue({ ...value, stock: event.target.value });
        }}
        validators={[lengthValidator('재고', 2, 100)]}
      />
      <ModalInput
        value={value.companyName}
        title="거래처 이름"
        onChange={(event: any) => {
          setValue({ ...value, companyName: event.target.value });
        }}
        validators={[lengthValidator('거래처 이름', 2, 100)]}
      />
      <ModalInput
        value={value.stock?.toString()}
        title="카테고리"
        onChange={(event: any) => {
          setValue({ ...value, categoryId: event.target.value });
        }}
        readonly
      />
    </Modal>
  );
}
