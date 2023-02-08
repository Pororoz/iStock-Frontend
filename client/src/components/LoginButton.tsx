import { ReactProps } from '@type/props';
import { ReactElement, useState } from 'react';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import LoginModal from './LoginModal';

function LoginButton({ children }: ReactProps<{}>): ReactElement {
  const [showModal, setShowModal] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const handleOnClick = (): void => {
    if (queryClient.getQueryData('user') === undefined) setShowModal(true);
    else {
      toast.success('로그아웃되었습니다.');
      queryClient.setQueryData('user', undefined);
    }
  };

  return (
    <div>
      <div
        onClick={() => {
          handleOnClick();
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
