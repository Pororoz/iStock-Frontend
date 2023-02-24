import ModalInput from '@components/ModalInputs/ModalInput';
import { ReactElement } from 'react';
import Modal from './Modal';
import Text from '@components/Text';
import useMutate from '@hooks/useMutate';
import useModalInput from '@hooks/useModalInput';
import { required, lengthValidator } from '@utils/validator';
import { updatePart } from '@fetches/part';
import { PartDtoType } from '@type/dto.type';

interface Props {
  row: PartDtoType;
  onSubmit?: () => void;
  onClose?: () => void;
  onChange?: () => void;
}

export default function UpdatePartModal({ row, onClose = () => {} }: Props): ReactElement {
  const { mutate } = useMutate({ key: 'part', action: updatePart, onSuccess: onClose });
  const values = {
    partName: useModalInput([required, lengthValidator(2, 50)], row.partName),
    spec: useModalInput([], row.spec),
    stock: useModalInput([], row.stock.toString()),
    price: useModalInput([], row.price.toString()),
  };

  return (
    <Modal
      onSubmit={() => {
        mutate({
          partId: row.partId,
          ...Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.value])),
          stock: parseInt(values.stock.value as string),
          price: parseInt(values.price.value as string),
        });
        onClose();
      }}
      onClose={onClose}
    >
      <Text>부품 수정</Text>
      <ModalInput value={row.partId.toString()} title="ID" readonly />
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
