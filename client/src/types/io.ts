export type PurchaseStatus = '구매대기' | '구매확정' | '구매취소';
export type ProductionStatus = '생산대기' | '생산확정' | '생산취소';
export type OutgoingStatus = '출고대기' | '출고확정' | '출고취소';
export type ProductIoStatus = ProductionStatus | OutgoingStatus;
export type PartIoStatus = PurchaseStatus | ProductIoStatus;
export type IoStatus = '대기' | '확정' | '취소';
