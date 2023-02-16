import { ReactElement } from 'react';
import { useQuery } from 'react-query';
import CategoryTable from '@components/Tables/CategoryTable';
import SideButton from '@components/SideButton';
import { handleOnError, convertStringToDate } from '@utils/common';
import { getCategory } from '@fetches/category';

function CategoryPage(): ReactElement {
  const { data, isLoading } = useQuery('category', getCategory, {
    onError: handleOnError,
    select: (data) => convertStringToDate(data),
  });

  return (
    <div>
      {!isLoading && data !== undefined && <CategoryTable rows={data} />}
      <SideButton action={() => {}}></SideButton>
    </div>
  );
}

export default CategoryPage;
