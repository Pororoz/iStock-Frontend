import { ReactElement } from 'react';
import styled from 'styled-components';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import ModalInput from '@components/ModalInputs/ModalInput';
import Text from '@components/Text';
import TextButton from '@components/TextButton';
import { AuthType, login } from '@fetches/auth';
import useMutate from '@hooks/useMutate';
import useModalInput from '@hooks/useModalInput';
import { lengthValidator, required } from '@utils/validator';
import { ApiResponse } from '@type/api.type';

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
  const queryClient = useQueryClient();
  const values = {
    // ERD 기준으로 아이디 50자 / 비밀번호 100자이나 최소 문자수에 대해서 이야기 해봐야함
    username: useModalInput([required, lengthValidator(2, 50)]),
    password: useModalInput([required, lengthValidator(2, 100)]),
  };
  const successCallback = async ({ data }: ApiResponse<AuthType>): Promise<void> => {
    const { username, rolename } = data;
    toast(`${username} 님 로그인되었습니다`);
    queryClient.setQueryData('user', { username, rolename });
    queryClient.setQueryData('auth', true);
    onCancel();
  };
  const { mutate } = useMutate({ action: login, callback: successCallback });
  const handleOnLogin = (): void => {
    mutate({ ...Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.value])) });
  };

  return (
    <Wrapper>
      <Overlay onClick={onCancel} />
      <InputWrapper>
        <Text size={24} weight={700}>
          로그인
        </Text>
        <ModalInput
          value={values.username.value as string}
          title="ID"
          onChange={values.username.onChange}
          errorMessage={values.username.errorMessage}
        />
        <ModalInput
          value={values.password.value as string}
          title="비밀번호"
          onChange={values.password.onChange}
          errorMessage={values.password.errorMessage}
        />
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
