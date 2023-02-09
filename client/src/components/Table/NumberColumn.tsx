import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const Column = styled.td`
  text-align: right;
`;

function NumberColumn({ children }: { children: ReactNode }): ReactElement {
  return <Column>{children}</Column>;
}

export default NumberColumn;
