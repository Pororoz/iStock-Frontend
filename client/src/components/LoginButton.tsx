import { ReactElement, useState } from 'react';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import LoginModal from '@components/Modals/LoginModal';
import { logout } from '@fetches/auth';
import useMutate from '@hooks/useMutate';
import { ReactProps } from '@type/props';

function LoginButton({ children }: ReactProps<{}>): ReactElement {
  const [showModal, setShowModal] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const onSuccess = (): void => {
    toast.success('로그아웃되었습니다.');
    queryClient.setQueryData('user', undefined);
  };
  const { mutate } = useMutate({ action: logout, onSuccess });
  const onClick = (): void => {
    queryClient.getQueryData('user') === undefined ? setShowModal(true) : mutate({});
  };

  return (
    <div>
      <div
        onClick={() => {
          onClick();
        }}
      >
        {children}
      </div>
      {showModal && (
        <LoginModal
          onCancel={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}

export default LoginButton;
