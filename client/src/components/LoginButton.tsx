import { ReactElement } from 'react';
import styled from 'styled-components';
import Login from '@images/user.svg';

const StyledButton = styled.button`
  background-color: transparent;
  padding: auto;
  height: 84px;
  width: 84px;
  border: none;
`;

function LoginButton(): ReactElement {
  return (
    <StyledButton>
      <img src={Login} />
    </StyledButton>
  );
}

export default LoginButton;
