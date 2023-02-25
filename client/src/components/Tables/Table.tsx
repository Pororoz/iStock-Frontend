import { ReactElement } from 'react';
import styled from 'styled-components';
import TableColumn from '@type/table';

const StyledTable = styled.table`
  width: 100%;
  thead {
    background-color: var(--color-blue);
    color: var(--color-white);
    font-weight: 700;
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
    tr:hover {
      background-color: var(--color-light-blue);
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
          <tr key={i}>
            {format.map(({ key, component }) => {
              const Component = component;
              return <Component key={key} row={row} i={i} />;
            })}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;
