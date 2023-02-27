import CreateBomModal from '@components/Modals/CreateBomModal';
import UpdateBomModal from '@components/Modals/UpdateBomModal';
import SideButton from '@components/SideButton';
import BomTable from '@components/Tables/BomTable';
import { getBom } from '@fetches/bom';
import { BomDtoType } from '@type/dto.type';
import { convertStringToDate } from '@utils/common';
import { ReactElement, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

function BomPage(): ReactElement {
  const { product } = useParams();
  const { data } = useQuery('bom', getBom(parseInt(product as string)), {
    select: (data) => convertStringToDate(data),
  });
  const [modal, setModal] = useState('none');
  const [target, setTarget] = useState<BomDtoType | null>(null);
  const onClose = (): void => {
    setModal('none');
    setTarget(null);
  };

  return (
    <div>
      {data !== undefined && (
        <BomTable
          rows={data}
          onUpdate={(row: BomDtoType) => {
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
      {modal === 'create' && <CreateBomModal onClose={onClose} />}
      {modal === 'update' && target !== null && <UpdateBomModal row={target} onClose={onClose} />}
    </div>
  );
}

export default BomPage;
