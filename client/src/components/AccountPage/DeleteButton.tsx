import { ReactElement } from 'react';
import { UseMutateFunction } from 'react-query';
import { AxiosResponse } from 'axios';

import TextButton from '@components/TextButton';

function DeleteButton({ onDelete }: { onDelete: UseMutateFunction<AxiosResponse, any> }): ReactElement {
  return (
    <TextButton color="--color-red" onClick={onDelete}>
      삭제
    </TextButton>
  );
}

export default DeleteButton;
