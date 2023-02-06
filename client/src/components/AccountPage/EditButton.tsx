import { ReactElement } from 'react';
import TextButton from '@components/TextButton';

function EditButton({ onEdit, row, setSelectedRow }: { onEdit: any; row: any; setSelectedRow: any }): ReactElement {
  return (
    <TextButton
      color="--color-blue"
      onClick={() => {
        setSelectedRow(row);
        onEdit();
      }}
    >
      수정
    </TextButton>
  );
}

export default EditButton;
