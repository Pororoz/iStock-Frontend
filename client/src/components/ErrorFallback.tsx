import { ReactElement } from 'react';
import styled from 'styled-components';
import MainButton from '@components/MainButton';
import Text from '@components/Text';
import { CustomError, ErrorData, generateErrorObject } from '@utils/common';

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
  const errorData: ErrorData = generateErrorObject(error);
  setTimeout(() => {
    resetErrorBoundary();
  }, 3000);

  return (
    <Wrapper role="alert">
      <Text color={'--color-red'} weight={700} size={35}>
        Error : {errorData.status}
      </Text>
      <Text weight={700} size={35}>
        {errorData.message}
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
