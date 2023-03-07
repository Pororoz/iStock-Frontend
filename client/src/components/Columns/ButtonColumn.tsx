import { ReactElement } from 'react';
import styled from 'styled-components';
import TextButton from '@components/TextButton';
import { ReactProps } from '@type/props';

const Column = styled.td<{ disabled: boolean }>`
  text-align: center;
  opacity: ${(props) => (!props.disabled ? 1.0 : 0.5)};
`;

interface Props {
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
}

function ButtonColumn({ children, color, onClick, disabled = false }: ReactProps<Props>): ReactElement {
  return (
    <Column disabled={disabled}>
      <TextButton color={color} onClick={onClick} disabled={disabled}>
        {children}
      </TextButton>
    </Column>
  );
}

export default ButtonColumn;
