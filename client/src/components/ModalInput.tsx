import { forwardRef, ReactElement } from 'react';
import Text from './Text';
import Input from './Input';
import styled from 'styled-components';

interface Props {
  title: string;
  placeholder?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 10px;
`;

function ModalInput({ title, placeholder }: Props, ref): ReactElement {
  return (
    <Wrapper>
      <Text size={20} weight={700}>
        {title}
      </Text>
      <Input ref={ref} placeholder={placeholder} />
    </Wrapper>
  );
}

export default forwardRef<HTMLInputElement, Props>(ModalInput);
