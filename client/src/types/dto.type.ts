import {
  AccountDbType,
  CategoryDbType,
  ProductDbType,
  BomDbType,
  PartDbType,
  PartIoDbType,
  ProductIoDbType,
} from '@type/db.type';

export type AccountDtoType = AccountDbType;
export type CategoryDtoType = CategoryDbType;
export type ProductDtoType = ProductDbType & { subAssy: ProductDbType[] };
export type BomDtoType = BomDbType & PartDbType;
export type PartDtoType = PartDbType;
export type PartIoDtoType = PartIoDbType &
  Pick<ProductIoDbType, 'productId'> &
  Pick<ProductDbType, 'name' | 'companyName' | 'categoryId'>;
export type ProductIoDtoType = ProductIoDbType & Pick<ProductDbType, 'name'>;

export type ServerDtoType<T extends { createdAt: Date; updatedAt: Date }> = Omit<T, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string;
};
export type AccountServerDtoType = ServerDtoType<AccountDtoType>;
