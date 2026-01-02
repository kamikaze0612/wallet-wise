import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';

import { configuration, validate } from '@/common/config/configuration';
import { DatabaseModule } from '@/modules/database/database.module';
import { TransactionsModule } from '@/modules/transactions/transactions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validate,
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    }),
    DatabaseModule,
    TransactionsModule,
  ],
})
export class AppModule {}
