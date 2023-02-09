import { ReactNode } from 'react';

export interface ModalType {
  onSubmit: () => void;
  onClose: () => void;
  element?: ReactNode;
}
