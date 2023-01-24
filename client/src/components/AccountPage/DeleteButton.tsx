import { ReactElement } from 'react';
import TextButton from '@components/TextButton';

function DeleteButton(): ReactElement {
  return <TextButton color="--color-red">삭제</TextButton>;
}

export default DeleteButton;
