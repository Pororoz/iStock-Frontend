import { PartIoStatus, ProductIoStatus } from './io';

export interface AccountData {
  username: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryData {
  categoryId: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductData {
  productId: number;
  number: string;
  name: string;
  codeNumber: string;
  stock: number;
  companyName: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BomData {
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

export interface PartData {
  partId: number;
  name: string;
  spec: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PartIoData {
  partIoId: number;
  quantity: number;
  status: PartIoStatus;
  createdAt: Date;
  updatedAt: Date;
  partId: number;
}

export interface ProductIoData {
  productIoId: number;
  quantity: number;
  status: ProductIoStatus;
  createdAt: Date;
  updatedAt: Date;
  productId: number;
}
