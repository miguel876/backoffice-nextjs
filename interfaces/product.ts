import { StatusType } from 'types/product';

export interface CreateProduct {
  imageUrl: string;
  name: string;
  status: StatusType;
  price: string;
  stock: number;
  availableAt: Date;
}
