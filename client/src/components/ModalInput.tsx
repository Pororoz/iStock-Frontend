import { forwardRef, ReactElement, Ref } from 'react';
import styled from 'styled-components';
import Text from '@components/Text';
import Input from '@components/Input';

interface Props {
  title: string;
  placeholder?: string;
  readonly?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 10px;
`;

function ModalInput({ title, placeholder, readonly }: Props, ref: Ref<HTMLInputElement>): ReactElement {
  return (
    <Wrapper>
      <Text size={20} weight={700}>
        {title}
      </Text>
      <Input ref={ref} placeholder={placeholder} readonly={readonly} />
    </Wrapper>
  );
}

export default forwardRef<HTMLInputElement, Props>(ModalInput);
