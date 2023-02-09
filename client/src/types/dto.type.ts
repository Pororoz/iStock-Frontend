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

export interface AccountServerDtoType {
  userId: number;
  username: string;
  roleName: 'ROLE_USER' | 'ROLE_ADMIN';
  createdAt: string;
  updatedAt: string;
}

// type DateType<T> = Omit<T, 'createdAt' | 'updatedAt'> & { createdAt: Date; updatedAt: Date };
