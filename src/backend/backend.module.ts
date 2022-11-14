import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionService } from './transaction/transaction.service';

@Module({
  controllers: [TransactionController],
  providers: [PrismaService, TransactionService],
})
export class BackendModule {}
