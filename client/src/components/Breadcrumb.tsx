import { usePathArray } from '@hooks/usePathArray';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  font-family: 'Noto Sans KR';
  color: var(--color-gray);
  font-size: 28px;
  font-weight: 700;
  display: flex;
  gap: 10px;
  margin: 15px;

  a {
    text-decoration: none;
    &:link {
      color: var(--color-gray);
    }
    &:visited {
      color: var(--color-gray);
    }
    &:last-child {
      color: var(--color-blue);
    }
  }
`;

function Breadcrumb(): ReactElement {
  const pathArray = usePathArray();

  return (
    <Wrapper>
      {pathArray.map((el) => {
        return (
          <>
            <span>{'>'}</span>
            <Link to={el.path} key={el.path}>
              <span>{el.lastParam}</span>
            </Link>
          </>
        );
      })}
    </Wrapper>
  );
}

export default Breadcrumb;
