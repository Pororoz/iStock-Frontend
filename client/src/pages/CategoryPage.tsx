import { ReactElement } from 'react';
import { useQuery } from 'react-query';
import SideButton from '@components/SideButton';
import CategoryTable from '@components/Table/CategoryTable';
import { handleOnError } from '@utils/common';
import { getCategory, onSelect } from '@utils/useCategory';

function CategoryPage(): ReactElement {
  const { data, isLoading } = useQuery('users', getCategory, {
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
