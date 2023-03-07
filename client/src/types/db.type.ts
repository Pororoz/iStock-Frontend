import { PartIoStatus, ProductIoStatus } from './io';

export interface AccountDbType {
  userId: number;
  username: string;
  roleName: 'ROLE_USER' | 'ROLE_ADMIN';
  createdAt: string;
  updatedAt: string;
}

export interface CategoryDbType {
  categoryId: number;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductDbType {
  productId: number;
  productNumber: string;
  productName: string;
  codeNumber: string;
  stock: number;
  companyName: string;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
  subAssy: SubAssy[];
}

export interface PartDbType {
  partId: number;
  partName: string;
  spec: string;
  price: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

interface SubAssy {
  partId: number;
  partName: string;
  spec: string;
  stock: number;
  quantity: number;
}
export interface BomDbType {
  bomId: number;
  locationNumber: string;
  codeNumber: string;
  quantity: number;
  memo: string;
  createdAt: string;
  updatedAt: string;

  productId: number;

  part?: PartDbType;
  product?: ProductDbType;
}

export interface PartIoDbType {
  partIoId: number;
  quantity: number;
  status: PartIoStatus;
  createdAt: string;
  updatedAt: string;
  partId: number;
}

export interface ProductIoDbType {
  productIoId: number;
  quantity: number;
  status: ProductIoStatus;
  createdAt: string;
  updatedAt: string;
  productId: number;
}
