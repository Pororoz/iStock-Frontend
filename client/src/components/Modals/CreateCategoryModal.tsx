import { ReactElement } from 'react';
import Modal from '@components/Modals/Modal';
import ModalInput from '@components/ModalInputs/ModalInput';
import Text from '@components/Text';
import { createCategory } from '@fetches/category';
import useMutate from '@hooks/useMutate';
import useModalInput from '@hooks/useModalInput';
import { lengthValidator } from '@utils/validator';

interface Props {
  onSubmit?: () => void;
  onClose?: () => void;
  onChange?: () => void;
}

export default function CreateCategoryModal({ onClose = () => {} }: Props): ReactElement {
  const { mutate } = useMutate({ key: 'category', action: createCategory, onSuccess: close });
  const categoryName = useModalInput([lengthValidator(2, 50)]);
  return (
    <Modal
      onSubmit={() => {
        mutate({ categoryName: categoryName.value });
        onClose();
      }}
      onClose={onClose}
    >
      <Text>카테고리 생성</Text>
      <ModalInput
        value={categoryName.value as string}
        title="카테고리 이름"
        onChange={categoryName.onChange}
        errorMessage={categoryName.errorMessage}
      />
    </Modal>
  );
}
