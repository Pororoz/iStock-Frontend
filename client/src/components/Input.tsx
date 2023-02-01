import { ReactProps, StyledProps } from '@type/props';
import { forwardRef, ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  color?: string;
  backgroundColor?: string;
  size?: number;
  width?: number;
  placeholder?: string;
}

const Wrapper = styled.div<Props>`
  position: relative;
  display: flex;
  gap: 30px;
  justify-content: left;
  align-items: center;
  padding-inline: 16px;
  padding-block: 12px;
  border-radius: 10px;
  background-color: var(${({ backgroundColor }) => backgroundColor ?? '--color-white'});
  border: 2px solid var(${({ color }) => color ?? '--color-dark-gray'});
  width: max-content;
`;

const StyledInput = styled.input<Props>`
  font-family: 'Noto Sans KR';
  color: var(${({ color }) => color ?? '--color-dark-gray'});
  font-weight: 500;
  font-size: ${({ size }) => size ?? 15}px;
  background-color: transparent;
  border: none;
  outline: none;
  width: ${({ width }) => (width !== undefined ? `${width}px` : 'max-content')};
`;

function Input({ className, children, ...props }: StyledProps<ReactProps<Props>>, ref): ReactElement {
  return (
    <Wrapper className={className} {...props}>
      {children}
      <StyledInput ref={ref} {...props}></StyledInput>
    </Wrapper>
  );
}

export default forwardRef<HTMLInputElement, Props>(Input);
