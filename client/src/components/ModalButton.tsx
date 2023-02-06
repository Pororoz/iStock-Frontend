import { AxiosResponse } from 'axios';
import { ReactElement } from 'react';
import { UseMutateFunction } from 'react-query';
import styled from 'styled-components';
import TextButton from './TextButton';

const ExitButton = styled(TextButton)`
  cursor: pointer;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
  border: none;
  background-color: transparent;
`;

const ConfirmButton = styled(TextButton)`
  cursor: pointer;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
  border: none;
  background-color: transparent;
`;

const Wrapper = styled.div`
  display: flex;
`;

interface Props {
  action?: UseMutateFunction<AxiosResponse>;
  onCancel: () => void;
}

function ModalButton({ action, onCancel }: Props): ReactElement {
  return (
    <Wrapper>
      <ConfirmButton onClick={action}>추가하기</ConfirmButton>
      <ExitButton color={'--color-red'} onClick={onCancel}>
        돌아가기
      </ExitButton>
    </Wrapper>
  );
}
export default ModalButton;
