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
  Pick<ProductDbType, 'name' | 'companyName'>;
export type ProductIoDtoType = ProductIoDbType & Pick<ProductDbType, 'name'>;
