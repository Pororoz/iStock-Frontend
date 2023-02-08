import useMutate from '@hooks/useMutate';
import { ReactElement, RefObject, useEffect, useRef, useState } from 'react';

import SelectInput from './SelectInput';
import Modal from './Modal';
import Text from './Text';

import { createUser, updateUser } from '@utils/useAccounts';
import useInput from '@hooks/useInput';
import RequiredInput from './RequiredInput';

interface Props {
  close: () => void;
  target: any;
}

interface ModalBodyProps {
  isUpdate: boolean;
  id: string;
  onChangeId: Function;
  isValidId: boolean;
  password: string;
  onChangePassword: Function;
  isValidPassword: boolean;
  roleNameRef: RefObject<HTMLSelectElement>;
}

const ROLES = ['ROLE_ADMIN', 'ROLE_USER'];

function ModalBody({
  isUpdate,
  id,
  onChangeId,
  isValidId,
  password,
  onChangePassword,
  isValidPassword,
  roleNameRef,
}: ModalBodyProps): ReactElement {
  return (
    <>
      <Text size={24}>{isUpdate ? '계정 수정' : '계정 생성'}</Text>
      <RequiredInput value={id} title="ID" onChange={onChangeId} isValid={isValidId} readonly={isUpdate} />
      {!isUpdate && (
        <RequiredInput value={password} title="비밀번호" onChange={onChangePassword} isValid={isValidPassword} />
      )}
      <SelectInput optionList={ROLES} title="권한" ref={roleNameRef} />
    </>
  );
}

function AuthModal({ close, target }: Props): ReactElement {
  const createMutate = useMutate({ key: 'users', action: createUser, onSuccess: close });
  const updateMutate = useMutate({ key: 'users', action: updateUser, onSuccess: close });

  const [isUpdate] = useState(target !== undefined);
  const roleNameRef = useRef<HTMLSelectElement>(null);

  const [id, setId, isValidId, onChangeId] = useInput(true);
  const [password, , isValidPassword, onChangePassword] = useInput(true);

  const handleOnClick = (): undefined => {
    if (isValidId === false || roleNameRef.current?.value === '') return;
    if (!isUpdate && isValidPassword === true) {
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
      {ModalBody({ isUpdate, id, onChangeId, isValidId, password, onChangePassword, isValidPassword, roleNameRef })}
    </Modal>
  );
}
export default AuthModal;
