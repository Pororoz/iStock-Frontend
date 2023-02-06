import { ReactElement } from 'react';
import styled from 'styled-components';
import EditButton from './AccountPage/EditButton';
import DeleteButton from './AccountPage/DeleteButton';
import { UseMutateFunction } from 'react-query';
import { AxiosResponse } from 'axios';
import { ErrorResponse } from '@utils/common';

// const rows = [
//   {
//     ID: '아이디',
//     권한: '관리자',
//     생성일: new Date().toDateString(),
//     수정일: new Date().toDateString(),
//   },
//   {
//     ID: '아이디',
//     권한: '관리자',
//     생성일: new Date().toDateString(),
//     수정일: new Date().toDateString(),
//   },
// ];

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

interface TableType {
  rows: any[];
  headers: string[];
  rowKeys: string[];
  onEdit: UseMutateFunction<AxiosResponse<any>, { response: ErrorResponse }, any, unknown>;
  onDelete: UseMutateFunction<AxiosResponse<any>, { response: ErrorResponse }, any, unknown>;
}
function Table({ rows, headers, rowKeys, onEdit, onDelete }: TableType): ReactElement {
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
            {rowKeys.map((rowKey: string) => {
              if (rowKey === 'No.') {
                return <td key={`${rowKey}${i}`}>{i + 1}</td>;
              } else if (rowKey === '수정') {
                return (
                  <td key={`${rowKey}${i}`}>
                    <EditButton
                      onEdit={() => {
                        onEdit(row.id); // modal 열기
                      }}
                    />
                  </td>
                );
              } else if (rowKey === '삭제') {
                return (
                  <td key={`${rowKey}${i}`}>
                    <DeleteButton
                      onDelete={() => {
                        onDelete(row.id);
                      }}
                    />
                  </td>
                );
              } else {
                return <td key={`${rowKey}${i}`}>{row[rowKey as keyof typeof row]}</td>;
              }
            })}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;
