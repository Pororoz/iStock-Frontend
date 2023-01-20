import { ReactElement } from 'react';
import styled from 'styled-components';
import { ReactProps } from '@type/props';

const StyledButton = styled.button`
  background-color: var(--color-dark-gray);
  padding: auto;
  height: 82px;
  width: 82px;
  border-radius: 41px;
  border: none;
`;

function FloatButton({ children }: ReactProps<{}>): ReactElement {
  return <StyledButton>{children}</StyledButton>;
}

export default FloatButton;
