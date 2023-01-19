import { ReactElement } from 'react';
import styled from 'styled-components';
import { ReactProps } from '@type/props';

interface Props {
  color?: string;
  backgroundColor?: string;
}

const StyledButton = styled.button<Props>`
  font-family: 'Noto Sans KR';
  color: var(${({ color }) => color ?? '--color-dark-gray'});
  background-color: var(${({ backgroundColor }) => backgroundColor ?? '--color-lightest-gray'});
  padding-inline: 12px;
  padding-block: 6px;
  border-radius: 10px;
  border: 1px solid var(${({ color }) => color ?? '--color-dark-gray'});
  box-sizing: border-box;
`;

function TextButton({ children, ...props }: ReactProps<Props>): ReactElement {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default TextButton;
