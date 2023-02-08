import useMutate from '@hooks/useMutate';
import { ReactElement, RefObject, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import ModalInput from './ModalInput';
import SelectInput from './SelectInput';

import { createUser, updateUser } from '@utils/useAccounts';
import Modal from './Modal';

interface Props {
  close: () => void;
  target: any;
}

interface RefType {
  idInput: RefObject<HTMLInputElement>;
  passwordInput: RefObject<HTMLInputElement>;
  roleInput: RefObject<HTMLSelectElement>;
}
// type HtmlElement = HTMLInputElement | HTMLSelectElement;

const validationCheck = (refObj: RefType): boolean => {
  const mappedArr = Object.keys(refObj).map((x) => refObj[x as keyof RefType].current?.value);
  if (mappedArr.some((x) => x === '')) {
    toast.error('모든 필드를 입력하세요.');
    return false;
  }
  return true;
};

const ROLES = ['ROLE_ADMIN', 'ROLE_USER'];

function AuthModal({ close, target }: Props): ReactElement {
  const [isUpdate] = useState(target !== undefined);
  const createMutate = useMutate({ key: 'users', action: createUser });
  const updateMutate = useMutate({ key: 'users', action: updateUser });
  const refObj: RefType = {
    idInput: useRef<HTMLInputElement>(null),
    passwordInput: useRef<HTMLInputElement>(null),
    roleInput: useRef<HTMLSelectElement>(null),
  };

  const { idInput, passwordInput, roleInput } = refObj;

  const handleOnClick = (): void => {
    if (validationCheck(refObj)) {
      if (target === undefined)
        createMutate.mutate(
          {
            username: idInput.current?.value,
            password: passwordInput.current?.value,
            roleName: roleInput.current?.value,
          },
          { onSuccess: close },
        );
      else {
        updateMutate.mutate(
          {
            userId: target.userId,
            password: '1234', // todo: (현재 필수값)password 수정 api 분리되면 삭제
            roleName: roleInput.current?.value,
          },
          { onSuccess: close },
        );
      }
    }
  };

  useEffect(() => {
    if (!isUpdate || idInput.current == null || roleInput.current == null) {
      return;
    }
    const { username, roleName } = target;
    idInput.current.value = username;
    roleInput.current.value = roleName;
  }, [idInput.current, passwordInput.current, roleInput.current]);

  return (
    <Modal close={close} action={handleOnClick} isUpdate={isUpdate}>
      <ModalInput title="ID" placeholder="ID를 입력하세요..." readonly={isUpdate} ref={idInput} />
      {!isUpdate && <ModalInput title="비밀번호" placeholder="비밀번호를 입력하세요..." ref={passwordInput} />}
      <SelectInput optionList={ROLES} title="권한" ref={roleInput} />
    </Modal>
  );
}
export default AuthModal;
