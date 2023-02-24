import { ReactElement } from 'react';
import styled from 'styled-components';
import Text from '@components/Text';

const Wrapper = styled.div`
  margin: 100px;
  text-align: center;
`;

function NotFound(): ReactElement {
  return (
    <Wrapper>
      <Text size={20}>찾을 수 없는 페이지입니다. URL을 확인해주세요.</Text>
    </Wrapper>
  );
}

export default NotFound;
