import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LoginButton from '@components/LoginButton';
import NavButton from '@components/NavButton';
import SearchInput from '@components/SearchInput';
import UserButton from '@components/UserButton';

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
      <LoginButton>
        <UserButton />
      </LoginButton>
    </Wrapper>
  );
}

export default NavBar;
