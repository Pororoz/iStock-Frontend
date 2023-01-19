import { ReactElement } from 'react';
import styled from 'styled-components';
import Text from '@components/Text';

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
  size: 28px;
  font-weight: 700px;
  color: ${({ selected }) => (selected === true ? 'var(--color-black)' : 'var(--color-light-gray)')};
`;

function NavButton({ content, selected }: StyledProps & { content: string }): ReactElement {
  return (
    <Wrapper selected={selected}>
      <StyledText selected={selected}>{content}</StyledText>
    </Wrapper>
  );
}

export default NavButton;
