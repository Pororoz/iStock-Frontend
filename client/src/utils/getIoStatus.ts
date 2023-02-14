import { PurchaseStatus, ProductionStatus, OutgoingStatus, IoStatus } from '@type/io';

export const getIoStatus = (status: PurchaseStatus | ProductionStatus | OutgoingStatus): IoStatus => {
  return status.slice(-2) as IoStatus;
};
