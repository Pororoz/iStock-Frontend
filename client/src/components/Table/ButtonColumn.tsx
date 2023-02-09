import { ReactElement } from 'react';
import styled from 'styled-components';
import { ReactProps } from '@type/props';
import TextButton from '@components/TextButton';

const Column = styled.td`
  text-align: center;
`;

interface Props {
  color?: string;
  onClick?: () => void;
}

function ButtonColumn({ children, color, onClick }: ReactProps<Props>): ReactElement {
  return (
    <Column>
      <TextButton color={color} onClick={onClick}>
        {children}
      </TextButton>
    </Column>
  );
}

export default ButtonColumn;
