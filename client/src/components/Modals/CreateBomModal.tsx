import ModalInput from '@components/ModalInputs/ModalInput';
import { ReactElement } from 'react';
import Modal from './Modal';
import Text from '@components/Text';
import useMutate from '@hooks/useMutate';
import { useParams } from 'react-router-dom';
import useModalInput from '@hooks/useModalInput';
import { required } from '@utils/validator';
import { createBom } from '@fetches/bom';

interface Props {
  onSubmit?: () => void;
  onClose?: () => void;
  onChange?: () => void;
}

export default function CreateBomModal({ onClose = () => {} }: Props): ReactElement {
  const { mutate } = useMutate({ key: 'bom', action: createBom, onSuccess: onClose });
  const { product } = useParams();
  const values = {
    locationNumber: useModalInput([]),
    codeNumber: useModalInput([]),
    quantity: useModalInput([]),
    memo: useModalInput([]),
    partId: useModalInput([required]),
    productId: useModalInput([required], product),
  };

  return (
    <Modal
      onSubmit={() => {
        mutate({
          ...Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.value])),
          quantity: parseInt(values.quantity.value as string),
          partId: parseInt(values.partId.value as string),
          productId: parseInt(values.productId.value as string),
        });
        onClose();
      }}
      onClose={onClose}
    >
      <Text>BOM 요소 생성</Text>
      <ModalInput
        value={values.partId.value as string}
        title="부품ID"
        onChange={values.partId.onChange}
        errorMessage={values.partId.errorMessage}
      />
      <ModalInput
        value={values.locationNumber.value as string}
        title="로케이션"
        onChange={values.locationNumber.onChange}
        errorMessage={values.locationNumber.errorMessage}
      />
      <ModalInput
        value={values.codeNumber.value as string}
        title="부품코드"
        onChange={values.codeNumber.onChange}
        errorMessage={values.codeNumber.errorMessage}
      />
      <ModalInput
        value={values.quantity.value as string}
        title="소요량"
        onChange={values.quantity.onChange}
        errorMessage={values.quantity.errorMessage}
      />
      <ModalInput
        value={values.memo.value as string}
        title="비고"
        onChange={values.memo.onChange}
        errorMessage={values.memo.errorMessage}
      />
      <ModalInput value={values.productId.value as string} title="제품ID" readonly />
    </Modal>
  );
}
