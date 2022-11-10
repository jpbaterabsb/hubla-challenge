import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Transaction } from './transaction.model';
import { validate } from 'class-validator';

@Injectable()
export class TransactionService {
  async create(file: Express.Multer.File): Promise<Transaction[] | object> {
    const dataAsString = file.buffer.toString('utf8');

    if (!dataAsString) {
      throw new HttpException('File is empty', HttpStatus.BAD_REQUEST);
    }

    const lines = dataAsString.split('\n');
    const errorByLine = {};
    const index = 1;
    const transactions = [];
    for (const line of lines) {
      if (line.length < 67) {
        errorByLine[index] = ['invalid line length'];
        continue;
      }
      const transaction = new Transaction();

      transaction.tipo = getType(line);
      transaction.data = getDate(line);
      transaction.produto = getProduct(line);
      transaction.valor = getAmount(line);
      transaction.vendedor = getPartner(line);

      const errors = await validate(transaction, { always: true });

      if (errors?.length > 0) {
        return (errorByLine[index] = errors);
      } else {
        transactions.push(transaction);
      }
    }

    return transactions;
  }
}

type TransactionLine = (line: string) => any;

const getType: TransactionLine = (line) => Number(line.slice(0, 1));
const getDate: TransactionLine = (line) => new Date(line.slice(1, 20));
const getProduct: TransactionLine = (line) => line.slice(26, 56).trim();
const getAmount: TransactionLine = (line) => Number(line.slice(56, 66));
const getPartner: TransactionLine = (line) => line.slice(66).trim();
