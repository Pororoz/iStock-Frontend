import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Text from '@components/Text';
import { ReactProps } from '@type/props';

interface StyledProps {
  selected?: boolean;
}

const Wrapper = styled.button<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 35px;
  padding-block: 30px;
  background-color: transparent;
  border: none;
  border-bottom: ${({ selected }) => (selected === true ? '4px solid var(--color-blue)' : 'none')};
`;

const StyledText = styled(Text)<StyledProps>`
  font-size: 20px;
  font-weight: 700;
  color: ${({ selected }) => (selected === true ? 'var(--color-black)' : 'var(--color-light-gray)')};
`;

function NavButton({ children, selected }: ReactProps<StyledProps>): ReactElement {
  return (
    <Wrapper selected={selected}>
      <StyledText selected={selected}>{children}</StyledText>
    </Wrapper>
  );
}

export default NavButton;
