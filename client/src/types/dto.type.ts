import {
  AccountDbType,
  CategoryDbType,
  ProductDbType,
  BomDbType,
  PartDbType,
  PartIoDbType,
  ProductIoDbType,
} from '@type/db.type';

export type ServerDtoType<T extends { createdAt: Date; updatedAt: Date }> = Omit<T, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string;
};
export type ClientDtoType<T extends { createdAt: string; updatedAt: string }> = Omit<T, 'createdAt' | 'updatedAt'> & {
  createdAt: Date;
  updatedAt: Date;
};

export type AccountDtoType = ClientDtoType<AccountDbType>;
export type CategoryDtoType = ClientDtoType<CategoryDbType>;
export type ProductDtoType = ClientDtoType<ProductDbType>;
export type BomDtoType = ClientDtoType<BomDbType>;
export type PartDtoType = ClientDtoType<PartDbType>;
export type PartIoDtoType = ClientDtoType<PartIoDbType>;
export type ProductIoDtoType = ClientDtoType<ProductIoDbType>;
export type AccountServerDtoType = AccountDtoType;
