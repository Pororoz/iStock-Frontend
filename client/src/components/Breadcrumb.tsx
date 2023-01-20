import { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  color?: string;
  highlightColor?: string;
}

const Wrapper = styled.span<Props>`
  font-family: 'Noto Sans KR';
  color: var(${({ color }) => color ?? '--color-gray'});
  font-size: 18px;
  font-weight: 700;

  :last-child {
    color: var(${({ highlightColor }) => highlightColor ?? '--color-blue'});
  }
`;

function Breadcrumb({ routes, ...props }: Props & { routes: string[] }): ReactElement {
  return (
    <Wrapper {...props}>
      {routes.map((route, i) => (
        <a key={route}>{`${i !== 0 ? '>' : ''} ${route}`}</a>
      ))}
    </Wrapper>
  );
}

export default Breadcrumb;
