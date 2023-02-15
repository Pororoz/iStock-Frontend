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
export type ProductDtoType = ClientDtoType<ProductDbType> & { subAssy: Array<ClientDtoType<ProductDbType>> };
export type BomDtoType = ClientDtoType<BomDbType & Omit<PartDbType, 'createdAt' | 'updatedAt'>>;
export type PartDtoType = ClientDtoType<PartDbType>;
export type PartIoDtoType = ClientDtoType<PartIoDbType> &
  Pick<ProductIoDbType, 'productId'> &
  Pick<ProductDbType, 'name' | 'companyName' | 'categoryId'>;
export type ProductIoDtoType = ProductIoDbType & Pick<ProductDbType, 'name'>;
export type AccountServerDtoType = AccountDtoType;
