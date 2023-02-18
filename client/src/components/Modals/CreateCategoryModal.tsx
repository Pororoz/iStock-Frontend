import ModalInput from '@components/ModalInputs/ModalInput';
import { ReactElement, useState } from 'react';
import Modal from './Modal';
import { lengthValidator } from '@utils/common';
import Text from '@components/Text';
import useMutate from '@hooks/useMutate';
import { createCategory } from '@fetches/category';

interface Props {
  onSubmit?: () => void;
  onClose?: () => void;
  onChange?: () => void;
}

export default function CreateCategoryModal({ onClose = () => {} }: Props): ReactElement {
  const { mutate } = useMutate({ key: 'category', action: createCategory, onSuccess: close });
  const [value, setValue] = useState('');
  return (
    <Modal
      onSubmit={() => {
        mutate({ categoryName: value });
        onClose();
      }}
      onClose={onClose}
    >
      <Text>카테고리 생성</Text>
      <ModalInput
        value={value}
        title="카테고리 이름"
        onChange={(event: any) => {
          setValue(event.target.value);
        }}
        validators={[lengthValidator('카테고리 이름', 2, 100)]}
      />
    </Modal>
  );
}
