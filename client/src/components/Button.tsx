import { ReactElement } from 'react';
import styled from 'styled-components';
import ReactProps from '@type/props';
import Text from '@components/Text';

interface Props {
  color?: string;
  backgroundColor?: string;
}

const StyledButton = styled.button<Props>`
  font-family: 'Noto Sans KR';
  color: var(${({ color }) => color ?? '--color-dark-gray'});
  background-color: var(${({ backgroundColor }) => backgroundColor ?? '--color-lightest-gray'});
  padding-inline: 10px;
  padding-block: 6px;
  border-radius: 5px;
  border: 1px solid var(${({ color }) => color ?? '--color-dark-gray'});
`;

function TextButton({ children, ...props }: ReactProps<Props>): ReactElement {
  return (
    <StyledButton {...props}>
      <Text color={props.color}>{children}</Text>
    </StyledButton>
  );
}

export default TextButton;
