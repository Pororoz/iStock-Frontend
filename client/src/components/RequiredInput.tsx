import { ReactElement } from 'react';
import styled from 'styled-components';
import Text from './Text';

interface Props {
  value?: string;
  onChange?: any;
  title?: string;
  isValid?: boolean;
  readonly?: boolean;
  color?: string;
  backgroundColor?: string;
  size?: number;
  width?: number;
  placeholder?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
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

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function RequiredInput({
  value,
  onChange,
  title = '',
  isValid = true,
  readonly = false,
  ...props
}: Props): ReactElement {
  return (
    <Wrapper>
      <TitleWrapper>
        <Text size={20} weight={700}>
          {title}
        </Text>
        {!isValid && (
          <Text color="--color-red" weight={500} size={12}>
            {`${title}는 필수값입니다`}
          </Text>
        )}
      </TitleWrapper>
      <TextWrapper {...props}>
        <StyledInput value={value} onChange={onChange} placeholder={`${title}을 입력하세요...`} readOnly={readonly} />
      </TextWrapper>
    </Wrapper>
  );
}
export default RequiredInput;
