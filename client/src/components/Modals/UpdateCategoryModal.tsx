import ModalInput from '@components/ModalInputs/ModalInput';
import { ReactElement } from 'react';
import Modal from './Modal';
import Text from '@components/Text';
import useMutate from '@hooks/useMutate';
import { updateCategory } from '@fetches/category';
import { CategoryDtoType } from '@type/dto.type';
import useModalInput from '@hooks/useModalInput';

interface Props {
  onSubmit?: () => void;
  onClose?: () => void;
  onChange?: () => void;
  row: CategoryDtoType;
}

export default function UpdateCategoryModal({ row, onClose = () => {} }: Props): ReactElement {
  const { mutate } = useMutate({ key: 'category', action: updateCategory, onSuccess: onClose });
  const categoryName = useModalInput([], row.categoryName);
  return (
    <Modal
      onSubmit={() => {
        mutate({ categoryName: categoryName.value, categoryId: row.categoryId });
        onClose();
      }}
      onClose={onClose}
    >
      <Text>카테고리 수정</Text>
      <ModalInput value={row.categoryId.toString()} title="카테고리 ID" readonly />
      <ModalInput value={categoryName.value as string} title="카테고리 이름" onChange={categoryName.onChange} />
    </Modal>
  );
}
