import { Module } from '@nestjs/common';

import { BackendModule } from './backend/backend.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), BackendModule],
})
export class AppModule {}
