import { ReactElement } from 'react';
import styled from 'styled-components';
import ImageButton from '@components/ImageButton';
import add from '@images/add.svg';
import top from '@images/top.svg';

interface Props {
  action: () => void;
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
`;

const scrollToTop = (): void => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
};

function SideButton({ action }: Props): ReactElement {
  return (
    <Wrapper>
      <ImageButton src={add} onClick={action} />
      <ImageButton src={top} onClick={scrollToTop} />
    </Wrapper>
  );
}
export default SideButton;
