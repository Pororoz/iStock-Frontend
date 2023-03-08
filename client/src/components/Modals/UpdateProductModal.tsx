import { ReactElement } from 'react';
import Modal from '@components/Modals/Modal';
import ModalInput from '@components/ModalInputs/ModalInput';
import Text from '@components/Text';
import { updateProduct } from '@fetches/product';
import useMutate from '@hooks/useMutate';
import useModalInput from '@hooks/useModalInput';
import { required, lengthValidator } from '@utils/validator';
import { ProductDtoType } from '@type/dto.type';

interface Props {
  row: ProductDtoType;
  onSubmit?: () => void;
  onClose?: () => void;
  onChange?: () => void;
}

export default function UpdateProductModal({ row, onClose = () => {} }: Props): ReactElement {
  const { mutate } = useMutate({ key: 'product', action: updateProduct, onSuccess: onClose });
  const values = {
    productName: useModalInput([required, lengthValidator(2, 50)], row.productName),
    productNumber: useModalInput([required, lengthValidator(2, 50)], row.productNumber),
    codeNumber: useModalInput([], row.codeNumber),
    stock: useModalInput([], row.stock.toString()),
    companyName: useModalInput([], row.companyName),
    categoryId: useModalInput([], row.categoryId.toString()),
  };

  return (
    <Modal
      onSubmit={() => {
        mutate({
          productId: row.productId,
          ...Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.value])),
          stock: parseInt(values.stock.value as string),
          categoryId: parseInt(values.categoryId.value as string),
        });
        onClose();
      }}
      onClose={onClose}
    >
      <Text>제품 생성</Text>
      <ModalInput value={row.productId.toString()} title="ID" readonly />
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
