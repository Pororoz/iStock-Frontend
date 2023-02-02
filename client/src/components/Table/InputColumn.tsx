import { ReactElement } from 'react';
import styled from 'styled-components';
import { ReactProps } from '@type/props';
import TextButton from '@components/TextButton';
import Input from '@components/Input';

const Column = styled.td`
  text-align: center;
`;

interface Props {
  onSubmit: () => void;
}

function InputColumn({ children, onSubmit }: ReactProps<Props>): ReactElement {
  const onClick = (): void => {
    onSubmit();
  };
  return (
    <Column>
      {children}
      <Input></Input>
      <TextButton onClick={onClick}>입력</TextButton>
    </Column>
  );
}

export default InputColumn;
