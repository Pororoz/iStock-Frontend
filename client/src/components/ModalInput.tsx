import { ReactElement } from 'react';
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

function ModalInput({ title, placeholder }: Props): ReactElement {
  return (
    <Wrapper>
      <Text size={20} weight={700}>
        {title}
      </Text>
      <Input placeholder={placeholder} />
    </Wrapper>
  );
}

export default ModalInput;
