import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const Column = styled.td`
  text-align: center;
`;

function TextColumn({ children }: { children: ReactNode }): ReactElement {
  return <Column>{children}</Column>;
}

export default TextColumn;
