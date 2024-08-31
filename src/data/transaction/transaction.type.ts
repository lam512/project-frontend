import {ProductDetailDto} from "../product/Product.type.ts";

export interface TransactionDto {
  tid:      number;
  buyerUid: number;
  dateTime: string;
  status:   string;
  total:    number;
  items:    TransactionItemDto[];
}

export interface TransactionItemDto {
  tpid:     number;
  product:  ProductDetailDto;
  quantity: number;
  subtotal: number;
}


