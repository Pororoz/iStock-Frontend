import { ReactElement } from 'react';
import styled from 'styled-components';
import { ReactProps, StyledProps } from '@type/props';
import ModalButton from './ModalButton';

interface Props {
  isUpdate: boolean;
  close: () => void;
  action: () => void;
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 10000;
`;

const ModalWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  height: max-content;
  max-height: 600px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-inline: 50px;
  padding-block: 30px;
  border-radius: 10px;
  background-color: var(--color-white);
  box-shadow: 1px 1px 4px 4px var(--color-black);
  z-index: 20000;
`;

const OverLay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--color-black);
  opacity: 0.8;
  z-index: 10000;
`;

const Modal = ({ children, ...props }: StyledProps<ReactProps<Props>>): ReactElement => {
  return (
    <Wrapper>
      <OverLay onClick={props.close} />
      <ModalWrapper>
        {children}
        <ModalButton onCancel={props.close} action={props.action} title={props.isUpdate ? '수정하기' : '추가하기'} />
      </ModalWrapper>
    </Wrapper>
  );
};

export default Modal;
