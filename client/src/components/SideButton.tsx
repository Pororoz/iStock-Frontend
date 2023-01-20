import { ReactElement } from 'react';
import styled from 'styled-components';
import FloatButton from '@components/FloatButton';
import Add from '@images/add.svg';
import Top from '@images/top.svg';

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 10000;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 10px;
`;

function TopFloatButton(): ReactElement {
  return (
    <FloatButton>
      <img src={Top} />
    </FloatButton>
  );
}

function AddFloatButton(): ReactElement {
  return (
    <FloatButton>
      <img src={Add} />
    </FloatButton>
  );
}

function SideButton(): ReactElement {
  return (
    <Wrapper>
      <ButtonWrapper>
        <TopFloatButton />
        <AddFloatButton />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default SideButton;
