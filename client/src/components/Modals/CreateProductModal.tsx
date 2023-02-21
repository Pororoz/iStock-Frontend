import ModalInput from '@components/ModalInputs/ModalInput';
import { ReactElement } from 'react';
import Modal from './Modal';
import Text from '@components/Text';
import useMutate from '@hooks/useMutate';
import { createCategory } from '@fetches/category';
import { useParams } from 'react-router-dom';
import useModalInput from '@hooks/useModalInput';
import { required, lengthValidator } from '@utils/validator';

interface Props {
  onSubmit?: () => void;
  onClose?: () => void;
  onChange?: () => void;
}

export default function CreateProductModal({ onClose = () => {} }: Props): ReactElement {
  const { mutate } = useMutate({ key: 'products', action: createCategory, onSuccess: onClose });
  const { category } = useParams();
  const values = {
    productName: useModalInput([required, lengthValidator(2, 50)]),
    productNumber: useModalInput([required, lengthValidator(2, 50)]),
    codeNumber: useModalInput([]),
    stock: useModalInput([], '0'),
    companyName: useModalInput([]),
    categoryId: useModalInput([], category),
  };

  return (
    <Modal
      onSubmit={() => {
        mutate(Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.value])));
        onClose();
      }}
      onClose={onClose}
    >
      <Text>제품 생성</Text>
      <ModalInput
        value={values.productName.value as string}
        title="품명"
        onChange={values.productName.onChange}
        errorMessage={values.productName.errorMessage}
      />
      <ModalInput
        value={values.productNumber.value as string}
        title="품번"
        onChange={values.productNumber.onChange}
        errorMessage={values.productNumber.errorMessage}
      />
      <ModalInput
        value={values.codeNumber.value as string}
        title="제품코드"
        onChange={values.codeNumber.onChange}
        errorMessage={values.codeNumber.errorMessage}
      />
      <ModalInput
        value={values.stock.value as string}
        title="재고"
        onChange={values.stock.onChange}
        errorMessage={values.stock.errorMessage}
      />
      <ModalInput
        value={values.companyName.value as string}
        title="거래처 이름"
        onChange={values.companyName.onChange}
        errorMessage={values.companyName.errorMessage}
      />
      <ModalInput value={values.categoryId.value as string} title="카테고리" readonly />
    </Modal>
  );
}
