import { ReactElement } from 'react';
import styled from 'styled-components';
import TableColumn from './table.type';

const StyledTable = styled.table`
  width: 100%;
  thead {
    background-color: var(--color-blue);
    color: var(--color-white);
    th {
      padding: 5px;
    }
  }
  tbody {
    background-color: var(--color-white);
    color: var(--color-black);
    tr:nth-child(2n) {
      background-color: var(--color-lightest-gray);
    }
    td {
      padding: 5px;
    }
  }
`;

function Table<T>({ rows, format }: { rows: T[]; format: Array<TableColumn<T>> }): ReactElement {
  return (
    <StyledTable>
      <thead>
        <tr>
          {format.map(({ key }) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>{format.map(({ component }) => component(row, i))}</tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;
