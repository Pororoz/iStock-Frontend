import { ReactElement, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import ProductTable from '@components/Tables/ProductTable';
import SideButton from '@components/SideButton';
import CreateProductModal from '@components/Modals/CreateProductModal';
import UpdateProductModal from '@components/Modals/UpdateProductModal';
import { getProduct } from '@fetches/product';
import { convertStringToDate } from '@utils/common';
import { ProductDtoType } from '@type/dto.type';

function ProductPage(): ReactElement {
  const { category } = useParams();

  const { data } = useQuery('product', getProduct(parseInt(category as string)), {
    select: (data) => convertStringToDate(data),
  });

  const [modal, setModal] = useState('none');
  const [target, setTarget] = useState<ProductDtoType | null>(null);
  const onClose = (): void => {
    setModal('none');
    setTarget(null);
  };

  return (
    <div>
      {data !== undefined && (
        <ProductTable
          rows={data}
          onUpdate={(row: ProductDtoType) => {
            setTarget(row);
            setModal('update');
          }}
        />
      )}
      <SideButton
        action={() => {
          setModal('create');
        }}
      ></SideButton>
      {modal === 'create' && <CreateProductModal onClose={onClose} />}
      {modal === 'update' && target !== null && <UpdateProductModal row={target} onClose={onClose} />}
    </div>
  );
}

export default ProductPage;
