import { ReactElement, useEffect } from 'react';
import MainButton from '@components/MainButton';
import Text from '@components/Text';
import styled from 'styled-components';
import LoginButton from '@components/LoginButton';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 100px;
`;

function MainPage(): ReactElement {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData('user');
  const navigate = useNavigate();
  useEffect(() => {
    if (user !== undefined) navigate('/items');
  }, [user]);

  return (
    <Wrapper>
      <Text size={100}>iStock</Text>
      {user === undefined && (
        <LoginButton>
          <MainButton>로그인 하기</MainButton>
        </LoginButton>
      )}
    </Wrapper>
  );
}

export default MainPage;
