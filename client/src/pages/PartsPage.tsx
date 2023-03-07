import { ReactElement, useState } from 'react';
import { useQuery } from 'react-query';
import CreatePartModal from '@components/Modals/CreatePartModal';
import UpdatePartModal from '@components/Modals/UpdatePartModal';
import SideButton from '@components/SideButton';
import PartTable from '@components/Tables/PartTable';
import { getPart } from '@fetches/part';
import { convertStringToDate } from '@utils/common';
import { PartDtoType } from '@type/dto.type';

function PartsPage(): ReactElement {
  const { data } = useQuery('part', getPart(''), {
    select: (data) => convertStringToDate(data),
  });

  const [modal, setModal] = useState('none');
  const [target, setTarget] = useState<PartDtoType | null>(null);
  const onClose = (): void => {
    setModal('none');
    setTarget(null);
  };

  return (
    <div>
      {data !== undefined && (
        <PartTable
          rows={data}
          onUpdate={(row: PartDtoType) => {
            setTarget(row);
            setModal('update');
          }}
        />
      )}
      <SideButton
        action={() => {
          setModal('create');
        }}
      ></SideButton>
      {modal === 'create' && <CreatePartModal onClose={onClose} />}
      {modal === 'update' && target !== null && <UpdatePartModal row={target} onClose={onClose} />}
    </div>
  );
}

export default PartsPage;
