import ProductTable from '@components/Tables/ProductTable';
import { ReactElement } from 'react';
import SideButton from '@components/SideButton';

function ProductPage(): ReactElement {
  return (
    <div>
      {!isLoading && data !== undefined && <ProductTable rows={rows} />}
      <SideButton action={() => {}}></SideButton>
    </div>
  );
}

export default ProductPage;
