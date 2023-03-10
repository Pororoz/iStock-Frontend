import { ReactElement } from 'react';
import Modal from '@components/Modals/Modal';
import ModalInput from '@components/ModalInputs/ModalInput';
import Text from '@components/Text';
import { updateCategory } from '@fetches/category';
import useMutate from '@hooks/useMutate';
import useModalInput from '@hooks/useModalInput';
import { lengthValidator } from '@utils/validator';
import { CategoryDtoType } from '@type/dto.type';

interface Props {
  onSubmit?: () => void;
  onClose?: () => void;
  onChange?: () => void;
  row: CategoryDtoType;
}

export default function UpdateCategoryModal({ row, onClose = () => {} }: Props): ReactElement {
  const { mutate } = useMutate({ key: 'category', action: updateCategory, onSuccess: onClose });
  const categoryName = useModalInput([lengthValidator(2, 50)], row.categoryName);
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
      <ModalInput
        value={categoryName.value as string}
        title="카테고리 이름"
        onChange={categoryName.onChange}
        errorMessage={categoryName.errorMessage}
      />
    </Modal>
  );
}
