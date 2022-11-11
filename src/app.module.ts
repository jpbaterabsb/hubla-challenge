import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BackendModule } from './backend/backend.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), BackendModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
