import { ReactElement } from 'react';
import styled from 'styled-components';
import EditButton from './AccountPage/EditButton';
import DeleteButton from './AccountPage/DeleteButton';
const headers = ['No.', 'ID', '권한', '생성일', '수정일', '수정', '삭제'];

const rows = [
  {
    ID: '아이디',
    권한: '관리자',
    생성일: new Date().toDateString(),
    수정일: new Date().toDateString(),
  },
  {
    ID: '아이디',
    권한: '관리자',
    생성일: new Date().toDateString(),
    수정일: new Date().toDateString(),
  },
];

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
    td {
      padding: 5px;
    }
  }
`;

function Table(): ReactElement {
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {headers.map((header) => {
              if (header === 'No.') {
                return <td key={`${header}${i}`}>{i + 1}</td>;
              } else if (header === '수정') {
                return (
                  <td key={`${header}${i}`}>
                    <EditButton />
                  </td>
                );
              } else if (header === '삭제') {
                return (
                  <td key={`${header}${i}`}>
                    <DeleteButton />
                  </td>
                );
              } else {
                return <td key={`${header}${i}`}>{row[header as keyof typeof row]}</td>;
              }
            })}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;
