import { ReactElement, useState } from 'react';
import { useQuery } from 'react-query';
import CategoryTable from '@components/Tables/CategoryTable';
import SideButton from '@components/SideButton';
import { handleOnError, convertStringToDate } from '@utils/common';
import { getCategory } from '@fetches/category';
import CreateCategoryModal from '@components/Modals/CreateCategoryModal';

function CategoryPage(): ReactElement {
  const { data, isLoading } = useQuery('category', getCategory, {
    onError: handleOnError,
    select: (data) => convertStringToDate(data),
  });

  const [modal, setModal] = useState('none');

  return (
    <div>
      {!isLoading && data !== undefined && <CategoryTable rows={data} />}
      <SideButton
        action={() => {
          setModal('create');
        }}
      ></SideButton>
      {modal === 'create' && (
        <CreateCategoryModal
          onClose={() => {
            setModal('none');
          }}
        />
      )}
    </div>
  );
}

export default CategoryPage;
