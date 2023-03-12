import PartIoTable from '@components/Tables/PartIoTable';
import { getPartIo } from '@fetches/partIo';
import { convertStringToDate } from '@utils/common';
import { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

function PartLogPage(): ReactElement {
  const { part } = useParams();
  const { data } = useQuery('partIo', getPartIo(parseInt(part as string)), {
    select: (data) => convertStringToDate(data),
  });

  return <div>{data !== undefined && <PartIoTable rows={data} />}</div>;
}

export default PartLogPage;
