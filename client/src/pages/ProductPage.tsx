import ProductTable from '@components/Table/ProductTable';
import { ReactElement } from 'react';

const rows = [
  {
    productId: 1,
    number: 'P001',
    name: '세탁기모터',
    codeNumber: '11',
    stock: 100,
    companyName: '대성공업',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

function ProductPage(): ReactElement {
  return (
    <div>
      <ProductTable rows={rows} />
    </div>
  );
}

export default ProductPage;
