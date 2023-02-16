import ProductTable from '@components/Tables/ProductTable';
import { ReactElement } from 'react';
import SideButton from '@components/SideButton';
import { handleOnError, onSelect } from '@utils/common';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getProduct } from '@utils/product';

function ProductPage(): ReactElement {
  const { categoryId } = useParams();
  const { data, isLoading } = useQuery('product', getProduct(parseInt(categoryId as string)), {
    onError: handleOnError,
    select: (data) => onSelect(data),
  });
  return (
    <div>
      {!isLoading && data !== undefined && <ProductTable rows={data} />}
      <SideButton action={() => {}}></SideButton>
    </div>
  );
}

export default ProductPage;
