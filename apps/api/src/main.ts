import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';

import { AppModule } from './modules/app/app.module';
import { HttpExceptionsFilter } from './common/exception-filters/http-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    rawBody: true,
  });

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://localhost:3000',
      /^http:\/\/192\.168\.\d{1,3}\.\d{1,3}:\d+$/,
      /^https:\/\/192\.168\.\d{1,3}\.\d{1,3}:\d+$/,
    ],
  });

  app.useLogger(app.get(Logger));
  app.useGlobalFilters(new HttpExceptionsFilter());

  const configService = app.get(ConfigService);
  const port = configService.get<number>('app.port')!;

  await app.listen(port);
}
bootstrap();
