import { ReactElement } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import Text from '@components/Text';
import { checkAuthState, handleOnError } from '@utils/common';

const Wrapper = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 100px;
`;

function MainPage({ info }: { info?: string }): ReactElement {
  const { data, isLoading } = useQuery('auth', checkAuthState, {
    onError: handleOnError,
    refetchOnMount: 'always',
  });
  return (
    <Wrapper>
      <Text size={100}>iStock</Text>
      {!isLoading && data === false && <Text>{info}</Text>}
    </Wrapper>
  );
}

export default MainPage;
