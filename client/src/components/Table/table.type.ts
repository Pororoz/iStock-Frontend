interface TableColumn<T> {
  key: string;
  component: (row: T, i: number) => JSX.Element;
}

export default TableColumn;
