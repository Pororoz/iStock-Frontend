import ProductTable from '@components/Tables/ProductTable';
import { ReactElement, useState } from 'react';
import SideButton from '@components/SideButton';
import { handleOnError, convertStringToDate } from '@utils/common';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getProduct } from '@fetches/product';
import CreateProductModal from '@components/Modals/CreateProductModal';
import { ProductDtoType } from '@type/dto.type';

function ProductPage(): ReactElement {
  const { category } = useParams();

  const { data } = useQuery('products', getProduct(parseInt(category as string)), {
    onError: handleOnError,
    select: (data) => convertStringToDate(data),
  });

  const [modal, setModal] = useState('none');
  const [, setTarget] = useState<ProductDtoType | null>(null);
  const onClose = (): void => {
    setModal('none');
    setTarget(null);
  };

  return (
    <div>
      {data !== undefined && <ProductTable rows={data} />}
      <SideButton
        action={() => {
          setModal('create');
        }}
      ></SideButton>
      {modal === 'create' && <CreateProductModal onClose={onClose} />}
    </div>
  );
}

export default ProductPage;
