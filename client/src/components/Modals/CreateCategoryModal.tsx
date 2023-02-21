import ModalInput from '@components/ModalInputs/ModalInput';
import { ReactElement } from 'react';
import Modal from './Modal';
import Text from '@components/Text';
import useMutate from '@hooks/useMutate';
import { createCategory } from '@fetches/category';
import useModalInput from '@hooks/useModalInput';

interface Props {
  onSubmit?: () => void;
  onClose?: () => void;
  onChange?: () => void;
}

export default function CreateCategoryModal({ onClose = () => {} }: Props): ReactElement {
  const { mutate } = useMutate({ key: 'category', action: createCategory, onSuccess: close });
  const categoryName = useModalInput([]);
  return (
    <Modal
      onSubmit={() => {
        mutate({ categoryName: categoryName.value });
        onClose();
      }}
      onClose={onClose}
    >
      <Text>카테고리 생성</Text>
      <ModalInput value={categoryName.value as string} title="카테고리 이름" onChange={categoryName.onChange} />
    </Modal>
  );
}
