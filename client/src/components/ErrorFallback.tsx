import { ReactElement } from 'react';
import { AxiosResponse } from 'axios';
import styled from 'styled-components';
import MainButton from '@components/MainButton';
import Text from '@components/Text';
import { ERROR_MESSAGE } from '@utils/common';

interface CustomError<T = unknown, D = any> extends Error {
  code?: string;
  response?: AxiosResponse<T, D>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 100px;
  * {
    padding: 20px;
  }
`;

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: CustomError;
  resetErrorBoundary: () => void;
}): ReactElement {
  const statusCode = error.response != null ? error.response.status : '클라이언트 오류';
  return (
    <Wrapper role="alert">
      <Text color={'--color-red'} weight={700} size={35}>
        Error : {statusCode}
      </Text>
      <Text weight={700} size={35}>
        {ERROR_MESSAGE[statusCode as keyof typeof ERROR_MESSAGE]}
      </Text>
      <Text weight={500} size={15}>
        {error.stack}
      </Text>
      <MainButton
        onClick={() => {
          resetErrorBoundary();
        }}
      >
        새로고침하기
      </MainButton>
    </Wrapper>
  );
}
export default ErrorFallback;
