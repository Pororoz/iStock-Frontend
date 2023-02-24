import { ReactElement } from 'react';
import { useQuery } from 'react-query';
import CategoryTable from '@components/Tables/CategoryTable';
import SideButton from '@components/SideButton';
import { getCategory, onSelect } from '@utils/useCategory';

function CategoryPage(): ReactElement {
  const { data, isLoading } = useQuery('category', getCategory, {
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
