import { ReactElement, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import Table from '@components/Table';
import { handleOnError } from '@utils/common';
import { getUsers, deleteUser } from '@utils/useAccounts';
import useMutate from '@hooks/useMutate';
import AuthModal from '@components/AuthModal';
import SideButton from '@components/SideButton';

const headers = ['No.', 'ID', '권한', '생성일', '수정일', '수정', '삭제'];
const rowKeys = ['No.', 'username', 'roleName', 'updatedAt', 'createdAt', '수정', '삭제'];

const Wrapper = styled.div`
  position: relative;
  height: max-content;
  width: 100vw;
`;

function AccountsPage(): ReactElement {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedRow, setSelectedRow] = useState(undefined);

  const open = (): void => {
    setIsOpen(true);
  };
  const close = (): void => {
    setIsOpen(false);
  };

  const { data, isLoading } = useQuery('users', getUsers, {
    onError: handleOnError,
  });

  const deleteMutate = useMutate({ key: 'users', action: deleteUser });

  return (
    <div>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <Wrapper>
          {isOpen && <AuthModal close={close} target={selectedRow} />}
          <Table
            rows={data?.data.data.contents}
            headers={headers}
            rowKeys={rowKeys}
            onEdit={open}
            onDelete={deleteMutate.mutate}
            setSelectedRow={setSelectedRow}
          />
          <SideButton
            action={() => {
              open();
              setSelectedRow(undefined);
            }}
          />
        </Wrapper>
      )}
    </div>
  );
}

export default AccountsPage;
