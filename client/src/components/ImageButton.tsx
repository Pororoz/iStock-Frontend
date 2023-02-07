import { MouseEventHandler, ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  width?: string;
  height?: string;
  data?: any;
}

const Wrapper = styled.div`
  cursor: pointer;
  width: max-content;
`;

function ImageButton({ src, onClick, width, height }: Props): ReactElement {
  return (
    <Wrapper onClick={onClick}>
      <img src={src} width={width !== undefined ? width : '50px'} height={height !== undefined ? height : '50px'} />
    </Wrapper>
  );
}

export default ImageButton;
