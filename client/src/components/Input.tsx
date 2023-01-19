import ReactProps from '@type/props';
import { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  color?: string;
  backgroundColor?: string;
  size?: number;
  width?: number;
  placeholder?: string;
}

const Wrapper = styled.div<Props>`
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  padding-inline: 12px;
  padding-block: 6px;
  border-radius: 10px;
  background-color: var(${({ backgroundColor }) => backgroundColor ?? '--color-white'});
  border: 1px solid var(${({ color }) => color ?? '--color-dark-gray'});
  width: max-content;
`;

const StyledInput = styled.input<Props>`
  font-family: 'Noto Sans KR';
  color: var(${({ color }) => color ?? '--color-dark-gray'});
  font-weight: 300;
  font-size: ${({ size }) => size ?? 15}px;
  background-color: transparent;
  border: none;
  outline: none;
  width: ${({ width }) => (width !== undefined ? `${width}px` : 'max-content')};
`;

function Input({ children, ...props }: ReactProps<Props>): ReactElement {
  return (
    <Wrapper {...props}>
      {children}
      <StyledInput {...props}></StyledInput>
    </Wrapper>
  );
}

export default Input;
