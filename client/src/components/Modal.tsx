import { ReactElement } from 'react';
import styled from 'styled-components';
import ModalInput from '@components/ModalInput';
import Text from '@components/Text';
import TextButton from '@components/TextButton';

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--color-black);
  opacity: 0.8;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: max-content;
  height: max-content;
  align-items: center;
  gap: 10px;
  padding-inline: 25px;
  padding-block: 30px;
  border-radius: 10px;
  background-color: var(--color-white);
  box-shadow: 1px 1px 4px 4px var(--color-black);
`;

const ExitButton = styled(Text)`
  cursor: pointer;
  margin-top: 20px;
`;

function Modal(): ReactElement {
  return (
    <Wrapper>
      <Overlay />
      <InputWrapper>
        <Text size={24} weight={700}>
          로그인
        </Text>
        <ModalInput title="ID" placeholder={'ID를 입력하세요...'}></ModalInput>
        <ModalInput title="Password" placeholder={'비밀번호를 입력하세요...'}></ModalInput>
        <ExitButton size={18} weight={500} color={'--color-red'}>
          돌아가기
        </ExitButton>
      </InputWrapper>
    </Wrapper>
  );
}

export default Modal;
