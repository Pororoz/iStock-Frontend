import { ReactElement } from 'react';
import { useQuery } from 'react-query';
import CategoryTable from '@components/Tables/CategoryTable';
import SideButton from '@components/SideButton';
import { handleOnError } from '@utils/common';
import { getCategory, onSelect } from '@utils/useCategory';

function CategoryPage(): ReactElement {
  const { data, isLoading } = useQuery('category', getCategory, {
    onError: handleOnError,
    select: (data) => onSelect(data),
  });

  return (
    <div>
      {!isLoading && data !== undefined && <CategoryTable rows={data} />}
      <SideButton action={() => {}}></SideButton>
    </div>
  );
}

export default CategoryPage;
