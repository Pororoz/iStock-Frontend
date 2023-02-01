import { ReactElement, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LoginButton from '@components/LoginButton';
import NavButton from '@components/NavButton';
import SearchInput from '@components/SearchInput';
import LoginModal from './LoginModal';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: max-content;
  background-color: var(--color-off-white);
`;

const Menus = styled.div`
  position: relative;
  display: flex;
`;

const CenteredSearchInput = styled(SearchInput)`
  /* position: absolute;
  left: 50%;
  transform: translateX(-50%); */
`;

// type PageTypes = 'Products' | 'Parts' | 'Accounts';

function NavBar(): ReactElement {
  const selectedPage = useLocation().pathname.split('/')[1];
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
    <Wrapper>
      <Menus>
        <Link to="/items">
          <NavButton selected={selectedPage === 'items'}>Items</NavButton>
        </Link>
        <Link to="/parts">
          <NavButton selected={selectedPage === 'parts'}>Parts</NavButton>
        </Link>
        <Link to="/accounts">
          <NavButton selected={selectedPage === 'accounts'}>Accounts</NavButton>
        </Link>
      </Menus>
      <CenteredSearchInput />
      <LoginButton onClick={handleOnClick} />
      {showModal && (
        <LoginModal
          onCancel={() => {
            setShowModal(false);
          }}
        />
      )}
    </Wrapper>
  );
}

export default NavBar;
