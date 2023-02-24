import { forwardRef, ReactElement, Ref, RefObject } from 'react';
import styled from 'styled-components';
import Select from '@components/Select';
import Text from '@components/Text';

interface Props {
  optionList: string[];
  title: string;
  size?: number;
  width?: number;
  ref: RefObject<HTMLSelectElement>;
}
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

function SelectInput({ optionList, title }: Props, ref: Ref<HTMLSelectElement>): ReactElement {
  return (
    <Wrapper>
      <Text size={20} weight={700}>
        {title}
      </Text>
      <Select ref={ref} optionList={optionList} />
    </Wrapper>
  );
}
export default forwardRef<HTMLSelectElement, Props>(SelectInput);
