import { ReactElement, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import MainPage from '@pages/MainPage';
import { checkAuthState } from '@utils/common';
import { ReactProps } from '@type/props';

function AuthRouter({ children }: ReactProps<{}>): ReactElement {
  // path가 바뀔 때마다 이 컴포넌트를 Re-render하기 위해서 useLocation hook 사용
  const location = useLocation();
  const { data, refetch } = useQuery('auth', checkAuthState);

  useEffect(() => {
    refetch().catch((err) => {
      throw err;
    });
  }, [location]);

  return data === true ? <Outlet /> : <MainPage info={'로그인 후 이용해주세요'} />;
}

export default AuthRouter;
