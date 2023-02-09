import CategoryTable from '@components/Tables/CategoryTable';
import { ReactElement } from 'react';

const rows = [
  {
    categoryId: 1,
    name: '모터',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    categoryId: 2,
    name: '예시',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    categoryId: 3,
    name: '입니다.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    categoryId: 4,
    name: '하하',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

function CategoryPage(): ReactElement {
  return (
    <div>
      <CategoryTable rows={rows} />
    </div>
  );
}

export default CategoryPage;
