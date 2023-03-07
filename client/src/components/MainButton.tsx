import { ReactElement } from 'react';
import styled from 'styled-components';
import Text from '@components/Text';
import { ReactProps } from '@type/props';

interface Props {
  onClick?: () => void;
}

const StyledButton = styled.button`
  font-family: 'Noto Sans KR';
  color: var(--color-black);
  background-color: var(--color-lightest-gray);
  padding-inline: 60px;
  padding-block: 30px;
  border-radius: 30px;
  border: none;
  box-shadow: 0px 5px 3px 0px var(--color-light-gray);
`;

function MainButton({ children, ...props }: ReactProps<Props>): ReactElement {
  return (
    <StyledButton {...props}>
      <Text size={30} weight={600}>
        {children}
      </Text>
    </StyledButton>
  );
}

export default MainButton;
