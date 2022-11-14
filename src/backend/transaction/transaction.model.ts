import { IsDate, IsIn, IsNotEmpty, IsNumber } from 'class-validator';

export class Transaction {
  @IsIn([1, 2, 3, 4], { message: 'invalid type' })
  type: number;
  @IsDate({ message: 'invalid date' })
  date: Date;
  @IsNotEmpty({ message: 'product is required' })
  product: string;
  @IsNumber({}, { message: 'invalid amount' })
  amount: number;
  @IsNotEmpty({ message: 'seller is required' })
  seller: string;
}
