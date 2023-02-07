import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { ReactProps } from '@type/props';
import TextButton from '@components/TextButton';

const Column = styled.td`
  text-align: center;
`;

interface Props {
  onSubmit: (input: number) => void;
}

const StyledInput = styled.input<{ color?: string; size?: number; width?: number }>`
  font-family: 'Noto Sans KR';
  color: var(${({ color }) => color ?? '--color-dark-gray'});
  font-weight: 500;
  font-size: ${({ size }) => size ?? 15}px;
  background-color: transparent;
  border: none;
  outline: none;
  width: ${({ width }) => (width !== undefined ? `${width}px` : 'max-content')};
`;

function InputColumn({ children, onSubmit }: ReactProps<Props>): ReactElement {
  const [input, setInput] = useState<number>(0);
  const onClick = (): void => {
    onSubmit(input);
  };
  return (
    <Column>
      {children}
      <StyledInput
        type="number"
        onChange={(event) => {
          setInput(parseInt(event.target.value));
        }}
      />
      <TextButton onClick={onClick}>입력</TextButton>
    </Column>
  );
}

export default InputColumn;
