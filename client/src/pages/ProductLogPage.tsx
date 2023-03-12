import ProductIoTable from '@components/Tables/ProductIoTable';
import { getProductIo } from '@fetches/productIo';
import { convertStringToDate } from '@utils/common';
import { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

function ProductLogPage(): ReactElement {
  const { product } = useParams();
  const { data } = useQuery('productIo', getProductIo(parseInt(product as string)), {
    select: (data) => convertStringToDate(data),
  });

  return <div>{data !== undefined && <ProductIoTable rows={data} />}</div>;
}

export default ProductLogPage;
