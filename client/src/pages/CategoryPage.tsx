import { ReactElement, useState } from 'react';
import { useQuery } from 'react-query';
import CategoryTable from '@components/Tables/CategoryTable';
import SideButton from '@components/SideButton';
import { handleOnError, convertStringToDate } from '@utils/common';
import { getCategory } from '@fetches/category';
import CreateCategoryModal from '@components/Modals/CreateCategoryModal';
import UpdateCategoryModal from '@components/Modals/UpdateCategoryModal';
import { CategoryDtoType } from '@type/dto.type';

function CategoryPage(): ReactElement {
  const { data } = useQuery('category', getCategory, {
    onError: handleOnError,
    select: (data) => convertStringToDate(data),
  });

  const [modal, setModal] = useState('none');
  const [target, setTarget] = useState<CategoryDtoType | null>(null);
  const onClose = (): void => {
    setModal('none');
    setTarget(null);
  };

  return (
    <div>
      {data !== undefined && (
        <CategoryTable
          rows={data}
          onUpdate={(row: CategoryDtoType) => {
            setTarget(row);
            setModal('update');
          }}
        />
      )}
      <SideButton
        action={() => {
          setModal('create');
        }}
      />
      {modal === 'create' && <CreateCategoryModal onClose={onClose} />}
      {modal === 'update' && target !== null && <UpdateCategoryModal row={target} onClose={onClose} />}
    </div>
  );
}

export default CategoryPage;
