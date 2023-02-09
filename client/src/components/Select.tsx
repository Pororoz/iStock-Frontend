import { forwardRef, ReactElement, Ref } from 'react';
import styled from 'styled-components';

interface Props {
  color?: string;
  backgroundColor?: string;
  size?: number;
  width?: number;
  placeholder?: string;
  optionList: string[];
  ref: Ref<HTMLSelectElement>;
}

const Wrapper = styled.select<Props>`
  position: relative;
  display: flex;
  gap: 30px;
  justify-content: left;
  align-items: center;
  padding-inline: 16px;
  padding-block: 12px;
  border-radius: 10px;
  background-color: var(${({ backgroundColor }) => backgroundColor ?? '--color-white'});
  border: 2px solid var(${({ color }) => color ?? '--color-dark-gray'});
  width: 200px;

  option {
    font-family: 'Noto Sans KR';
    color: var(${({ color }) => color ?? '--color-dark-gray'});
    font-weight: 500;
    font-size: ${({ size }) => size ?? 15}px;
    width: ${({ width }) => (width !== undefined ? `${width}px` : '200px')};
  }
`;

function Select({ ...props }: Props, ref: Ref<HTMLSelectElement>): ReactElement {
  return (
    <Wrapper {...props} ref={ref}>
      {props.optionList.map((x) => (
        <option key={x} value={x}>
          {x}
        </option>
      ))}
    </Wrapper>
  );
}
export default forwardRef<HTMLSelectElement, Props>(Select);
