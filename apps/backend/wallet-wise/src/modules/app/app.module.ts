import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { LoggerModule } from "nestjs-pino";

import { configuration } from "@/config/configuration";
import { AuthModule } from "@/modules/auth/auth.module";
import { CategoriesModule } from "@/modules/categories/categories.module";
import { DatabaseModule } from "@/modules/database/database.module";
import { TransactionsModule } from "@/modules/transactions/transactions.module";

import { AppController } from "./app.controller";

@Module({
  imports: [
    // AuthModule,
    CategoriesModule,
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    DatabaseModule,
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: "pino-pretty",
          options: {
            singleLine: true,
          },
        },
      },
    }),
    TransactionsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
