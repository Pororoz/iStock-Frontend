import useMutate from '@hooks/useMutate';
import { ReactElement, RefObject, useEffect, useRef, useState } from 'react';

import SelectInput from './SelectInput';
import Modal from './Modal';
import Text from './Text';

import { createUser, updateUser } from '@utils/useAccounts';
import useInput from '@hooks/useInput';
import RequiredInput from './RequiredInput';
import { checkLength, checkEmpty, checkRequired } from '@utils/common';
import { toast } from 'react-toastify';
import { AccountDtoType } from '@type/dto.type';

interface Props {
  close: () => void;
  target: any;
}

interface ModalBodyProps {
  isUpdate: boolean;
  id: string;
  onChangeId: Function;
  errorIdMessage: string | undefined;
  password: string;
  onChangePassword: Function;
  errorPasswordMessage: string | undefined;
  roleNameRef: RefObject<HTMLSelectElement>;
  target: AccountDtoType;
}

const ROLES = ['ROLE_ADMIN', 'ROLE_USER'];

function ModalBody({
  isUpdate,
  id,
  onChangeId,
  errorIdMessage,
  password,
  onChangePassword,
  errorPasswordMessage,
  roleNameRef,
  target,
}: ModalBodyProps): ReactElement {
  useEffect(() => {
    if (roleNameRef.current != null) roleNameRef.current.value = target.roleName;
  }, [roleNameRef.current]);

  return (
    <>
      <Text size={24}>{isUpdate ? '계정 수정' : '계정 생성'}</Text>
      <RequiredInput value={id} title="ID" onChange={onChangeId} errorMessage={errorIdMessage} readonly={isUpdate} />
      {!isUpdate && (
        <RequiredInput
          value={password}
          title="비밀번호"
          onChange={onChangePassword}
          errorMessage={errorPasswordMessage}
        />
      )}
      <SelectInput optionList={ROLES} title="권한" ref={roleNameRef} />
    </>
  );
}

const AUTH_REGEX = {
  id: /^[\w/-/!]{2,15}$/gi,
  비밀번호: /^[\w/-/!]{2,15}$/gi,
};

const checkRegEx = (title: string, target: string): string => {
  return title !== '' && target.match(AUTH_REGEX[title as keyof typeof AUTH_REGEX]) === null
    ? `유효하지 않은 ${title}입니다.`
    : '';
};

const validationCheck = [checkRequired, checkLength, checkRegEx];
const useInputParameter = { validationCheck, min: 2, max: 15 };

function AuthModal({ close, target }: Props): ReactElement {
  const createMutate = useMutate({ key: 'users', action: createUser, onSuccess: close });
  const updateMutate = useMutate({ key: 'users', action: updateUser, onSuccess: close });

  const [isUpdate] = useState(target !== undefined);
  const roleNameRef = useRef<HTMLSelectElement>(null);

  const [id, setId, errorIdMessage, onChangeId] = useInput({ ...useInputParameter, title: 'id' });
  const [password, , errorPasswordMessage, onChangePassword] = useInput({ ...useInputParameter, title: '비밀번호' });

  const handleOnClick = (): undefined => {
    if (
      !checkEmpty(errorIdMessage) ||
      (!checkEmpty(errorPasswordMessage) && !isUpdate) ||
      checkEmpty(roleNameRef.current?.value)
    ) {
      toast.error('입력값을 확인하세요');
      return;
    }

    if (!isUpdate) {
      createMutate.mutate({
        username: id,
        password,
        roleName: roleNameRef.current?.value,
      });
    } else {
      updateMutate.mutate({
        userId: target.userId,
        password: '1234', // todo: (현재 필수값)password 수정 api 분리되면 삭제
        roleName: roleNameRef.current?.value,
      });
    }
  };

  useEffect(() => {
    if (!isUpdate) return;
    // modal 기본값 설정
    setId(target.username);
  }, []);

  return (
    <Modal onClose={close} onSubmit={handleOnClick}>
      {ModalBody({
        isUpdate,
        id,
        onChangeId,
        errorIdMessage,
        password,
        onChangePassword,
        errorPasswordMessage,
        roleNameRef,
        target,
      })}
    </Modal>
  );
}
export default AuthModal;
