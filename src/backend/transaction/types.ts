import {
  IsDate,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class Transaction {
  @IsIn([1, 2, 3, 4], { message: 'tipo inválido' })
  type: number;
  @IsDate({ message: 'data inválida' })
  date: Date;
  @IsNotEmpty({ message: 'produto inválido' })
  product: string;
  @IsNumber({}, { message: 'valor inválido' })
  amount: number;
  @IsNotEmpty({ message: 'vendedor inválido' })
  seller: string;
}

export class FindAllReq {
  @IsOptional()
  @IsIn(['1', '2'], {})
  group?: string;
}

export class FindAllRes {
  transactions: Transaction[];
  total: any;
}
