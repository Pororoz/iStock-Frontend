import { ReactElement } from 'react';
import Modal from '@components/Modals/Modal';
import ModalInput from '@components/ModalInputs/ModalInput';
import Text from '@components/Text';
import { createPart } from '@fetches/part';
import useMutate from '@hooks/useMutate';
import useModalInput from '@hooks/useModalInput';
import { required, lengthValidator } from '@utils/validator';

interface Props {
  onSubmit?: () => void;
  onClose?: () => void;
  onChange?: () => void;
}

export default function CreatePartModal({ onClose = () => {} }: Props): ReactElement {
  const { mutate } = useMutate({ key: 'part', action: createPart, onSuccess: onClose });
  const values = {
    partName: useModalInput([required, lengthValidator(2, 50)]),
    spec: useModalInput([]),
    stock: useModalInput([], '0'),
    price: useModalInput([], '0'),
  };

  return (
    <Modal
      onSubmit={() => {
        mutate({
          ...Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.value])),
          stock: parseInt(values.stock.value as string),
          price: parseInt(values.price.value as string),
        });
        onClose();
      }}
      onClose={onClose}
    >
      <Text>부품 생성</Text>
      <ModalInput
        value={values.partName.value as string}
        title="부품명"
        onChange={values.partName.onChange}
        errorMessage={values.partName.errorMessage}
      />
      <ModalInput
        value={values.spec.value as string}
        title="스펙"
        onChange={values.spec.onChange}
        errorMessage={values.spec.errorMessage}
      />
      <ModalInput
        value={values.stock.value as string}
        title="재고"
        onChange={values.stock.onChange}
        errorMessage={values.stock.errorMessage}
      />
      <ModalInput
        value={values.price.value as string}
        title="단가"
        onChange={values.price.onChange}
        errorMessage={values.price.errorMessage}
      />
    </Modal>
  );
}
