import { ReactElement, useRef } from 'react';
import styled from 'styled-components';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import ModalInput from '@components/ModalInput';
import Text from '@components/Text';
import TextButton from './TextButton';
import login, { LoginResponse } from '@fetches/login';
import useMutate from '@hooks/useMutate';

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
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

const ExitButton = styled(TextButton)`
  cursor: pointer;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
  border: none;
  background-color: transparent;
`;

const LoginButton = styled(TextButton)`
  cursor: pointer;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
  border: none;
  background-color: transparent;
`;

function LoginModal({ onCancel }: { onCancel: () => void }): ReactElement {
  const idInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const successCallback = async ({ data }: LoginResponse): Promise<void> => {
    const { username, rolename } = data;
    toast(`${username} 님 로그인되었습니다`);
    queryClient.setQueryData('user', { username, rolename });
    onCancel();
  };

  const { mutate } = useMutate({ action: login, callback: successCallback });

  const handleOnLogin = (): void => {
    if (idInput.current === null || passwordInput.current === null) {
      return;
    }
    mutate({ username: idInput.current.value, password: passwordInput.current.value });
  };

  return (
    <Wrapper>
      <Overlay onClick={onCancel} />
      <InputWrapper>
        <Text size={24} weight={700}>
          로그인
        </Text>
        <ModalInput ref={idInput} title="ID" placeholder={'ID를 입력하세요...'}></ModalInput>
        <ModalInput ref={passwordInput} title="Password" placeholder={'비밀번호를 입력하세요...'}></ModalInput>
        <div>
          <LoginButton onClick={handleOnLogin}>로그인</LoginButton>
          <ExitButton color={'--color-red'} onClick={onCancel}>
            돌아가기
          </ExitButton>
        </div>
      </InputWrapper>
    </Wrapper>
  );
}

export default LoginModal;
