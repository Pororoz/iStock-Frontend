import { ReactElement } from 'react';
import styled from 'styled-components';
import User from '@images/user.svg';

const StyledButton = styled.button`
  background-color: transparent;
  padding: auto;
  height: 84px;
  width: 84px;
  border: none;
`;

function UserButton(): ReactElement {
  return (
    <StyledButton>
      <img src={User} />
    </StyledButton>
  );
}

export default UserButton;
