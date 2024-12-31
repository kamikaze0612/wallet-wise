import { Global, Inject, Module } from "@nestjs/common";
import { type Sql } from "postgres";

import { databaseClientProviderToken } from "@/common/constants/provider_tokens.constants";

import { databaseProviders } from "./database.provider";

@Global()
@Module({
  exports: [...databaseProviders],
  providers: [...databaseProviders],
})
export class DatabaseModule {
  constructor(@Inject(databaseClientProviderToken) private client: Sql) {}

  async onModuleDestroy() {
    await this.client.end();
  }
}
