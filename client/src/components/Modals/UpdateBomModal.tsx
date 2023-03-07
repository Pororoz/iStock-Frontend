import ModalInput from '@components/ModalInputs/ModalInput';
import { ReactElement } from 'react';
import Modal from './Modal';
import Text from '@components/Text';
import useMutate from '@hooks/useMutate';
import useModalInput from '@hooks/useModalInput';
import { required } from '@utils/validator';
import { BomDtoType } from '@type/dto.type';
import { updateBom } from '@fetches/bom';

interface Props {
  onSubmit?: () => void;
  onClose?: () => void;
  onChange?: () => void;
  row: BomDtoType;
}

export default function UpdateBomModal({ row, onClose = () => {} }: Props): ReactElement {
  const { mutate } = useMutate({ key: 'bom', action: updateBom, onSuccess: onClose });
  const values = {
    bomId: useModalInput([required], row.bomId.toString()),
    locationNumber: useModalInput([], row.locationNumber),
    codeNumber: useModalInput([], row.codeNumber),
    quantity: useModalInput([], row.quantity.toString()),
    memo: useModalInput([], row.memo),
    partId: useModalInput([required], row.part !== undefined ? row.part.partId.toString() : ''),
    productId: useModalInput([required], row.productId.toString()),
  };

  return (
    <Modal
      onSubmit={() => {
        mutate({
          bomId: row.bomId,
          ...Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.value])),
          quantity: parseInt(values.quantity.value as string),
          partId: parseInt(values.partId.value as string),
          productId: parseInt(values.productId.value as string),
        });
        onClose();
      }}
      onClose={onClose}
    >
      <Text>BOM 요소 수정</Text>
      <ModalInput value={values.bomId.value as string} title="ID" readonly />
      <ModalInput value={values.partId.value as string} title="부품ID" readonly />
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
