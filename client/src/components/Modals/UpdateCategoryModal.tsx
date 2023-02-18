import ModalInput from '@components/ModalInputs/ModalInput';
import { ReactElement, useState } from 'react';
import Modal from './Modal';
import { lengthValidator } from '@utils/common';
import Text from '@components/Text';
import useMutate from '@hooks/useMutate';
import { updateCategory } from '@fetches/category';
import { CategoryDtoType } from '@type/dto.type';

interface Props {
  onSubmit?: () => void;
  onClose?: () => void;
  onChange?: () => void;
  row: CategoryDtoType;
}

export default function UpdateCategoryModal({ row, onClose = () => {} }: Props): ReactElement {
  const { mutate } = useMutate({ key: 'category', action: updateCategory, onSuccess: onClose });
  const [value, setValue] = useState(row.categoryName);
  return (
    <Modal
      onSubmit={() => {
        mutate({ categoryName: value, categoryId: row.categoryId });
        onClose();
      }}
      onClose={onClose}
    >
      <Text>카테고리 수정</Text>
      <ModalInput value={row.categoryId.toString()} title="카테고리 ID" readonly />
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
