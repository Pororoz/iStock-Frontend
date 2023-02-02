import { ReactElement } from 'react';
import styled from 'styled-components';
import EditButton from '../AccountPage/EditButton';
import DeleteButton from '../AccountPage/DeleteButton';
import TextColumn from './TextColumn';
import ButtonColumn from './ButtonColumn';

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
const tableFormat = [
  {
    header: '아이디',
    column: ({ content }: { content: string }): ReactElement => <TextColumn>{content}</TextColumn>,
  },
  {
    header: '권한',
    column: ({ content }: { content: string }): ReactElement => <TextColumn>{content}</TextColumn>,
  },
  {
    header: '생성일',
    column: ({ content }: { content: string }): ReactElement => <TextColumn>{content}</TextColumn>,
  },
  {
    header: '수정일',
    column: ({ content }: { content: string }): ReactElement => <TextColumn>{content}</TextColumn>,
  },
  {
    header: '수정',
    column: ({ onClick }: { onClick: () => void }): ReactElement => (
      <ButtonColumn color="--color-blue" onClick={onClick}>
        수정
      </ButtonColumn>
    ),
  },
  {
    header: '삭제',
    column: ({ onClick }: { onClick: () => void }): ReactElement => (
      <ButtonColumn color="--color-red" onClick={onClick}>
        삭제
      </ButtonColumn>
    ),
  },
];

function TableHeader(): ReactElement {
  return (
    <thead>
      <tr>
        {tableFormat.map(({ header }) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
  );
}

function TableBody(rows: any): ReactElement {
  return (
    <tbody>
      {rows.map((row: any, i: number) => (
        <tr key={i}>{tableFormat.map(({ column, header }) => column(row[header as keyof typeof row]))}</tr>
      ))}
    </tbody>
  );
}

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
