import AccountTable from '@components/Tables/AccountTable';
import { ReactElement, useState } from 'react';
import { useQuery } from 'react-query';
import { getUsers, transformData } from '@utils/useAccounts';
import SideButton from '@components/SideButton';
import AuthModal from '@components/AuthModal';
import { AccountDtoType } from '@type/dto.type';

function AccountsPage(): ReactElement {
  const [hasModal, setHasModal] = useState(false);
  const [target, setTarget] = useState<AccountDtoType>(); // 수정 시 모달에 표현돼야 하는 데이터

  const { data } = useQuery('users', getUsers, {
    select: (data) => transformData(data),
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
          {hasModal && <AuthModal close={closeModal} target={target} />}
        </div>
      )}
    </div>
  );
}

export default AccountsPage;
