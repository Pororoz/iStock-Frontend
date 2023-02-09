import { ReactElement } from 'react';
import styled from 'styled-components';
import Text from './Text';

interface Props {
  value?: string;
  onChange?: any;
  title?: string;
  errorMessage?: string | undefined;
  readonly?: boolean;
  color?: string;
  backgroundColor?: string;
  size?: number;
  width?: number;
  placeholder?: string;
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  align-items: flex-end;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  align-items: center;
`;

const TextWrapper = styled.div<Props>`
  position: relative;
  display: flex;
  gap: 20px;
  justify-content: left;
  align-items: center;
  padding-inline: 16px;
  padding-block: 12px;
  border-radius: 10px;
  background-color: var(${({ backgroundColor }) => backgroundColor ?? '--color-white'});
  border: 2px solid var(${({ color }) => color ?? '--color-dark-gray'});
  width: max-content;
`;

const StyledInput = styled.input<Props>`
  font-family: 'Noto Sans KR';
  color: var(${({ color }) => color ?? '--color-dark-gray'});
  font-weight: 500;
  font-size: ${({ size }) => size ?? 15}px;
  background-color: transparent;
  border: none;
  outline: none;
  width: ${({ width }) => (width !== undefined ? `${width}px` : 'max-content')};

  &:read-only {
    color: var(--color-gray);
  }
`;

const Blank = styled.div`
  height: 12px;
`;

function RequiredInput({
  value,
  onChange,
  title = '',
  errorMessage = '',
  readonly = false,
  ...props
}: Props): ReactElement {
  return (
    <InputWrapper>
      <Wrapper>
        <Text size={20} weight={700}>
          {title}
        </Text>
        <TextWrapper {...props}>
          <StyledInput value={value} onChange={onChange} placeholder={`${title}을 입력하세요...`} readOnly={readonly} />
        </TextWrapper>
      </Wrapper>
      {errorMessage !== '' ? (
        <Text color="--color-red" weight={500} size={12}>
          {errorMessage}
        </Text>
      ) : (
        <Blank />
      )}
    </InputWrapper>
  );
}
export default RequiredInput;
