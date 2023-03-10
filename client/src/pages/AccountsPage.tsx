import { ReactElement, useState } from 'react';
import { useQuery } from 'react-query';
import AccountTable from '@components/Tables/AccountTable';
import SideButton from '@components/SideButton';
import AuthModal from '@components/Modals/AuthModal';
import { getUsers } from '@fetches/account';

import { convertStringToDate } from '@utils/common';
import { AccountDtoType } from '@type/dto.type';

function AccountsPage(): ReactElement {
  const [hasModal, setHasModal] = useState(false);
  const [target, setTarget] = useState<AccountDtoType>(); // 수정 시 모달에 표현돼야 하는 데이터

  const { data } = useQuery('users', getUsers, {
    select: (data) => convertStringToDate(data),
  });

  const openEditModal = (row: AccountDtoType): void => {
    setHasModal(true);
    setTarget(row);
  };

  const openCreateModal = (): void => {
    setHasModal(true);
  };

  const closeModal = (): void => {
    setHasModal(false);
    setTarget(undefined);
  };

  return (
    <div>
      {data !== undefined && (
        <div>
          <AccountTable rows={data} onUpdate={openEditModal} />
          <SideButton action={openCreateModal} />
          {hasModal && <AuthModal onClose={closeModal} target={target} />}
        </div>
      )}
    </div>
  );
}

export default AccountsPage;
