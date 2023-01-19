import { ReactElement } from 'react';
import styled from 'styled-components';
import { ReactProps } from '@type/props';

interface Props {
  color?: string;
  weight?: number;
  size?: number;
}

const StyledText = styled.span<Props>`
  font-family: 'Noto Sans KR';
  color: var(${({ color }) => color ?? '--color-black'});
  font-weight: ${({ weight }) => weight ?? 700};
  font-size: ${({ size }) => size ?? 15}px;
`;

function Text({ children, ...props }: ReactProps<Props>): ReactElement {
  return <StyledText {...props}>{children}</StyledText>;
}

export default Text;
