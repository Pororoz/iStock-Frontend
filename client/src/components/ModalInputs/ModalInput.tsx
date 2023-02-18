import { ReactElement } from 'react';
import styled from 'styled-components';
import Text from '@components/Text';

const validate = (value: string | undefined, validators: Array<(value: string) => string>): string => {
  if (value === undefined) return '';
  for (const validator of validators) if (validator(value) !== '') return validator(value);
  return '';
};

interface Props {
  value?: string;
  onChange?: any;
  title?: string;
  validators?: Array<(value: string) => string>;
  readonly?: boolean;
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

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  justify-content: left;
  align-items: center;
  padding-inline: 16px;
  padding-block: 12px;
  border-radius: 10px;
  background-color: var(--color-white);
  border: 2px solid var(--color-dark-gray);
  width: max-content;
`;

const StyledInput = styled.input<Props>`
  font-family: 'Noto Sans KR';
  color: var(--color-dark-gray);
  font-weight: 500;
  font-size: 15px;
  background-color: transparent;
  border: none;
  outline: none;
  width: max-content;

  &:read-only {
    color: var(--color-gray);
  }
`;

function ModalInput({ value, onChange, title = '', validators = [], readonly = false }: Props): ReactElement {
  return (
    <InputWrapper>
      <Wrapper>
        <Text size={20} weight={700}>
          {title}
        </Text>
        <TextWrapper>
          <StyledInput value={value} onChange={onChange} placeholder={`${title}을 입력하세요...`} readOnly={readonly} />
        </TextWrapper>
      </Wrapper>
      <Text color="--color-red" weight={500} size={12}>
        {validate(value, validators)}
      </Text>
    </InputWrapper>
  );
}
export default ModalInput;
