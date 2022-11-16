import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get<ConfigService>(ConfigService);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });

  const prismaService = app.get(PrismaService);

  await prismaService.enableShutdownHooks(app);

  const config = new DocumentBuilder()
    .setTitle('Hubla API')
    .setDescription('Backend for hubla challenge')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const port = configService.get('PORT');
  await app.listen(port || 3000);
}
bootstrap();
