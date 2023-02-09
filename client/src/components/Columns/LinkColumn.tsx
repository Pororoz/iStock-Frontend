import { ReactElement, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Column = styled.td`
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: var(--color-blue);
  text-decoration: underline;
`;

function LinkColumn({ children, to }: { children: ReactNode; to: string }): ReactElement {
  return (
    <Column>
      <StyledLink to={to}>{children}</StyledLink>
    </Column>
  );
}

export default LinkColumn;
