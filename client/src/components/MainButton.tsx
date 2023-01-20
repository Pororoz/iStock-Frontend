import { ReactElement } from 'react';
import styled from 'styled-components';
import { ReactProps } from '@type/props';
import Text from './Text';

const StyledButton = styled.button`
  font-family: 'Noto Sans KR';
  color: var(--color-black);
  background-color: var(--color-lightest-gray);
  padding-inline: 90px;
  padding-block: 45px;
  border-radius: 30px;
  border: none;
  box-shadow: 0px 5px 3px 0px var(--color-light-gray);
`;

function MainButton({ children }: ReactProps<{}>): ReactElement {
  return (
    <StyledButton>
      <Text size={48} weight={500}>
        {children}
      </Text>
    </StyledButton>
  );
}

export default MainButton;
