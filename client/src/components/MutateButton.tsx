import { AxiosResponse } from 'axios';
import { ReactElement } from 'react';
import { UseMutateFunction } from 'react-query';
import styled from 'styled-components';

interface Props {
  src: string;
  onClick: UseMutateFunction<AxiosResponse>;
  width?: string;
  height?: string;
  data: any;
}

const Wrapper = styled.div`
  cursor: pointer;
  width: max-content;
`;

function MutateButton({ src, onClick, width, height, data }: Props): ReactElement {
  return (
    <Wrapper
      onClick={() => {
        onClick(data);
      }}
    >
      <img src={src} width={width !== undefined ? width : '50px'} height={height !== undefined ? height : '50px'} />
    </Wrapper>
  );
}
export default MutateButton;
