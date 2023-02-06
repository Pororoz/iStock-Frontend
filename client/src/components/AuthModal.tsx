import useMutate from '@hooks/useMutate';
import { createUser } from '@utils/useAccounts';
import { ReactElement, RefObject, useRef } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import ModalButton from './ModalButton';
import ModalInput from './ModalInput';

import SelectInput from './SelectInput';

interface Props {
  close: () => void;
}

type HtmlElement = HTMLInputElement | HTMLSelectElement;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 10000;
`;

const ModalWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  height: max-content;
  max-height: 600px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-inline: 25px;
  padding-block: 30px;
  border-radius: 10px;
  background-color: var(--color-white);
  box-shadow: 1px 1px 4px 4px var(--color-black);
  z-index: 20000;
`;

const OverLay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--color-black);
  opacity: 0.8;
  z-index: 10000;
`;

const validationCheck = (...args: Array<RefObject<HtmlElement>>): boolean => {
  const mappedArr = args.map((x) => x.current?.value);
  if (mappedArr.some((x) => x === '')) {
    toast.error('모든 필드를 입력하세요.');
    return false;
  }
  return true;
};

const ROLES = ['ROLE_ADMIN', 'ROLE_USER'];

function AuthModal({ close }: Props): ReactElement {
  const { mutate } = useMutate({ key: 'users', action: createUser });
  const idInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const roleInput = useRef<HTMLSelectElement>(null);

  const handleOnClick = (): void => {
    if (validationCheck(idInput, passwordInput, roleInput)) {
      mutate(
        {
          username: idInput.current?.value,
          password: passwordInput.current?.value,
          roleName: roleInput.current?.value,
        },
        {
          onSuccess: close,
        },
      );
    }
  };

  return (
    <Wrapper>
      <OverLay onClick={close} />
      <ModalWrapper>
        <ModalInput ref={idInput} title="ID" placeholder="ID를 입력하세요..." />
        <ModalInput ref={passwordInput} title="비밀번호" placeholder="비밀번호를 입력하세요..." />
        <SelectInput ref={roleInput} optionList={ROLES} title="권한" />
        <ModalButton onCancel={close} action={handleOnClick} />
      </ModalWrapper>
    </Wrapper>
  );
}
export default AuthModal;
