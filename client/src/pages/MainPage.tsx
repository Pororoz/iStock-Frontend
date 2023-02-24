import { ReactElement } from 'react';
import styled from 'styled-components';
import Text from '@components/Text';

const Wrapper = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 100px;
`;

function MainPage({ info }: { info?: string }): ReactElement {
  return (
    <Wrapper>
      <Text size={100}>iStock</Text>
      <Text>{info}</Text>
    </Wrapper>
  );
}

export default MainPage;
