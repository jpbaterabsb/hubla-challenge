import { IsDate, IsIn, IsNotEmpty, IsNumber } from 'class-validator';

export class Transaction {
  @IsIn([1, 2, 3, 4], { message: 'tipo invalido' })
  tipo: number;
  @IsDate({ message: 'data invalida' })
  data: Date;
  @IsNotEmpty({ message: 'produto é um campo obrigatório' })
  produto: string;
  @IsNumber({}, { message: 'valor invalido' })
  valor: number;
  @IsNotEmpty({ message: 'vender é um campo obrigatório' })
  vendedor: string;
}
