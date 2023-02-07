import { ReactElement } from 'react';

interface TableColumn<T> {
  key: string;
  component: ({ row, i }: { row: T; i: number }) => ReactElement<{ row: T; i: number }>;
}

export default TableColumn;
