import { ReactElement } from 'react';
import TextButton from '@components/TextButton';

function EditButton({ onEdit }: { onEdit: any }): ReactElement {
  return (
    <TextButton
      color="--color-blue"
      onClick={() => {
        onEdit({ username: 'pororo', password: '1q2w3e4r!', roleName: 'ROLE_USER' });
      }}
    >
      수정
    </TextButton>
  );
}

export default EditButton;
