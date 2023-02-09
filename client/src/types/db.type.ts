import { PartIoStatus, ProductIoStatus } from './io';

export interface AccountDbType {
  username: string;
  roleName: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryDbType {
  categoryId: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductDbType {
  productId: number;
  number: string;
  name: string;
  codeNumber: string;
  stock: number;
  companyName: string;
  createdAt: Date;
  updatedAt: Date;
  categoryId: number;
}

export interface BomDbType {
  bomId: number;
  locationNumber: string;
  codeNumber: string;
  quantity: number;
  memo: string;
  createdAt: Date;
  updatedAt: Date;
  productId: number;
  partId: number;
}

export interface PartDbType {
  partId: number;
  name: string;
  spec: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PartIoDbType {
  partIoId: number;
  quantity: number;
  status: PartIoStatus;
  createdAt: Date;
  updatedAt: Date;
  partId: number;
}

export interface ProductIoDbType {
  productIoId: number;
  quantity: number;
  status: ProductIoStatus;
  createdAt: Date;
  updatedAt: Date;
  productId: number;
}
